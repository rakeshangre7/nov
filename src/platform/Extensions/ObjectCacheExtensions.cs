using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Web;

namespace XmCloudnov.Extensions
{
    public static class ObjectCacheExtensions
    {
        #region Extension Methods

        /// <summary>
        /// Returns the cache item based on the key, timeout and function.
        /// If a cache item for the given key does not exist - the result of getCacheItem function will automatically be added to the cache for the given key (unless the result is null).
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T Get<T>(this ObjectCache cache, string cacheKey, object syncLock, TimeSpan timeout, Func<T> getCacheItem)
        {
            var cacheItemPolicy = new CacheItemPolicy();
            cacheItemPolicy.AbsoluteExpiration = DateTime.UtcNow.Add(timeout);

            return cache.Get<T>(cacheKey, syncLock, cacheItemPolicy, getCacheItem);
        }

        /// <summary>
        /// Returns the cache item based on the key and function with the given cache item policy in effect.
        /// If a cache item for the given key does not exist - the result of getCacheItem function will automatically be added to the cache for the given key (unless the result is null).
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T Get<T>(this ObjectCache cache, string cacheKey, object syncLock, CacheItemPolicy cacheItemPolicy, Func<T> getCacheItem)
        {
            if (cacheItemPolicy == null)
            {
                throw new ArgumentNullException("cacheItemPolicy");
            }
            if (cacheKey == null)
            {
                throw new ArgumentNullException("cacheKey");
            }

            // Try to get the result from the cache
            object result = cache.Get(cacheKey);

            if (result == null)
            {
                // The item was not found in the cache

                if (syncLock == null)
                {
                    // Do NOT use locking to access the cache so simply get our value and add it to the cache
                    result = getCacheItem();
                    if (result != null)
                    {
                        cache.Set(cacheKey, result, cacheItemPolicy);
                    }
                }
                else
                {
                    // Use locking to access the cache
                    lock (syncLock)
                    {
                        result = cache.Get(cacheKey);
                        if (result == null)
                        {
                            result = getCacheItem();
                            if (result != null)
                            {
                                cache.Add(cacheKey, result, cacheItemPolicy);
                            }
                        }
                    }
                }
            }

            return (T)result;
        }

        /// <summary>
        /// Removes the cache item with the given key from the cache.
        /// </summary>
        /// <param name="cache"></param>
        /// <param name="cacheKey"></param>
        /// <param name="syncLock"></param>
        public static void Remove(this ObjectCache cache, string cacheKey, object syncLock)
        {
            if (cacheKey == null)
            {
                throw new ArgumentNullException("cacheKey");
            }

            if (syncLock == null)
            {
                // No locking
                cache.Remove(cacheKey);
            }
            else
            {
                // Lock before trying to remove the cache item
                lock (syncLock)
                {
                    if (cache.Get(cacheKey) != null)
                    {
                        cache.Remove(cacheKey);
                    }
                }
            }
        }

        /// <summary>
        /// Removes all cache items
        /// </summary>
        /// <param name="cache"></param>
        /// <param name="syncLock"></param>
        public static void RemoveAll(this ObjectCache cache, object syncLock)
        {
            List<string> cacheKeys = MemoryCache.Default.Select(kvp => kvp.Key).ToList();
            foreach (string cacheKey in cacheKeys)
            {
                Remove(cache, cacheKey, syncLock);
            }
        }

        /// <summary>
        /// Removes all cache items with the given cacheKeyPrefix
        /// </summary>
        /// <param name="cache"></param>
        /// <param name="cacheKeyPrefix"></param>
        /// <param name="syncLock"></param>
        public static void RemoveAll(this ObjectCache cache, string cacheKeyPrefix, object syncLock)
        {
            List<string> cacheKeys = MemoryCache.Default.Where(w => w.Key.StartsWith(cacheKeyPrefix)).Select(kvp => kvp.Key).ToList();
            foreach (string cacheKey in cacheKeys)
            {
                Remove(cache, cacheKey, syncLock);
            }
        }

        #endregion
    }
}
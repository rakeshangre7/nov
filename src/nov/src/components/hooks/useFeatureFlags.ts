// Global
import { useCallback, useEffect, useState } from 'react';

// Local
import type { FeatureFlags } from 'lib/feature-flags';

const useFeatureFlags = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({});

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/feature-flags');
      const resData = await res.json();
      console.log(resData);

      setFeatureFlags(resData);
    })();
  }, []);

  const getFeatureFlag = useCallback(
    (flag: keyof FeatureFlags) => (!!featureFlags ? featureFlags[flag] : undefined),
    [featureFlags]
  );

  return {
    featureFlags,
    getFeatureFlag,
  };
};

export default useFeatureFlags;

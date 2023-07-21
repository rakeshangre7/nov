// Global
import { createClient } from '@vercel/edge-config';

export interface FeatureFlags {
  buttonIcons?: boolean;
  maintenanceMode?: boolean;
}

/** get single feature flag by key */
export async function get(key: keyof FeatureFlags) {
  const edgeConfig = createClient(process.env.EDGE_CONFIG);
  const featureFlag = await edgeConfig.get<FeatureFlags>(key);
  return featureFlag;
}

/** get all feature flags */
export async function getAll() {
  const edgeConfig = createClient(process.env.EDGE_CONFIG);
  const featureFlags = await edgeConfig.getAll<FeatureFlags>();
  return featureFlags;
}

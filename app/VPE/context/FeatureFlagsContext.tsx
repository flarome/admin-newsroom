import { createContext, useMemo, useContext, type ReactNode } from "react";
import { defaultFeatureFlags, type FeatureFlags } from "@VPE/constants/flags";

// Feature flags context
export const FeatureFlagsContext = createContext<FeatureFlags>(defaultFeatureFlags);

// FeatureFlagsProvider component
export function FeatureFlagsProvider({ features, children }: {  features?: Partial<FeatureFlags>; children: ReactNode}) {
  const mergedFeatures = useMemo(() => ({ ...defaultFeatureFlags, ...features }), [features]);
  return <FeatureFlagsContext.Provider value={mergedFeatures}>{children}</FeatureFlagsContext.Provider>;
}

// Hook to access feature flags
export function useFeatureFlags(): FeatureFlags {
  return useContext(FeatureFlagsContext);
}
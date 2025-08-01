
// Default feature flags (disabled by default)
export const defaultFeatureFlags = {
  experimental: false,
  usesSortableLibrary: false,
  usesBottomSheet: false,
  disablesRightSidebar: false,
  denseUIEnabled: false,
};

export type FeatureFlags = typeof defaultFeatureFlags;
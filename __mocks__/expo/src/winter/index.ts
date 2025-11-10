// Mock for expo/src/winter/index.ts
// This prevents the actual index from importing runtime, which would try to require ImportMetaRegistry
// We set up the global that runtime.ts would set up, so everything works
// Note: We don't import async-require/setup as it's not needed for tests

Object.defineProperty(globalThis, "__ExpoImportMetaRegistry", {
  value: {
    get url() {
      return "file:///test-bundle.js";
    },
  },
  enumerable: false,
  writable: true,
});

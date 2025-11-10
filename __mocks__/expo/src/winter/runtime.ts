// Mock for expo/src/winter/runtime.ts
// Prevents the require('./ImportMetaRegistry') call that Jest blocks
Object.defineProperty(globalThis, "__ExpoImportMetaRegistry", {
  value: {
    get url() {
      return "file:///test-bundle.js";
    },
  },
  enumerable: false,
  writable: true,
});

/* eslint-env jest */
// This file runs before jest.setup.js to mock Expo's winter runtime
// jest-expo's setup imports 'expo/src/winter' which imports runtime.native
// We need to mock these BEFORE jest-expo's setup runs
// Using jest.doMock() to ensure mocks are set up immediately

// Mock ImportMetaRegistry first
jest.doMock(
  "expo/src/winter/ImportMetaRegistry",
  () => ({
    ImportMetaRegistry: {
      get url() {
        return "file:///test-bundle.js";
      },
    },
  }),
  { virtual: false }
);

// Mock runtime.native to prevent execution
jest.doMock("expo/src/winter/runtime.native", () => ({}), { virtual: false });

// Mock runtime.ts to prevent it from requiring ImportMetaRegistry
jest.doMock(
  "expo/src/winter/runtime",
  () => {
    Object.defineProperty(globalThis, "__ExpoImportMetaRegistry", {
      value: {
        get url() {
          return "file:///test-bundle.js";
        },
      },
      enumerable: false,
      writable: true,
    });
  },
  { virtual: false }
);

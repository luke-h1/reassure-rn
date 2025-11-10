module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { rootMode: "upward" }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.(ts|tsx|js)", "**/*.(test|spec).(ts|tsx|js)"],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/_layout.tsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^expo/src/winter/ImportMetaRegistry$":
      "<rootDir>/__mocks__/expo/src/winter/ImportMetaRegistry.ts",
    "^expo/src/winter/runtime\\.native$":
      "<rootDir>/__mocks__/expo/src/winter/runtime.native.ts",
    "^expo/src/winter/runtime\\.native\\.ts$":
      "<rootDir>/__mocks__/expo/src/winter/runtime.native.ts",
    "^expo/src/winter/runtime$":
      "<rootDir>/__mocks__/expo/src/winter/runtime.ts",
    "^expo/src/winter$": "<rootDir>/__mocks__/expo/src/winter/index.ts",
    "^expo/src/winter/index$": "<rootDir>/__mocks__/expo/src/winter/index.ts",
  },
  setupFiles: ["<rootDir>/jest.preset.js"],
};

import "@testing-library/jest-native/extend-expect";
import { configure } from "reassure";

// Configure Reassure to use React Native Testing Library
configure({ testingLibrary: "react-native" });

// Mock expo-router
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  useGlobalSearchParams: () => ({}),
  useSegments: () => [],
  Stack: ({ children }: { children: React.ReactNode }) => children,
  Tabs: ({ children }: { children: React.ReactNode }) => children,
}));

// Silence console warnings in tests (optional)
// Uncomment if you want to suppress console warnings during tests
// global.console = {
//   ...console,
//   warn: jest.fn(),
//   error: jest.fn(),
// };

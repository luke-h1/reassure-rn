// Mock for expo/src/winter/runtime.native.ts
// This prevents the actual file from executing, which would try to require('./ImportMetaRegistry')
// and cause Jest errors. The actual runtime.native.ts file executes side effects on import,
// so we provide an empty mock that doesn't execute anything.
export {};

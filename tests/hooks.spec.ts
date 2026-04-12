import { test, expect } from '@playwright/test';

// ✅ Correct hooks usage
test.beforeEach(async () => {
  console.log("Before each Method");
});

test.afterEach(async () => {
  console.log("After Each method");
});

// ✅ All tests must be top-level
test("Test1", async () => {
  console.log("This is First Test Method");
});

test("Test2", async () => {
  console.log("This is second Test method");
});

test("Test3", async () => {
  console.log("This is Third Test method");
});

test("Test4", async () => {
  console.log("This is Fourth Test Method");
});
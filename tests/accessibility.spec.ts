import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("accessibility testing", async ({ page }, testInfo) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // Run accessibility scan
  const accessibilityScanResult = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  // Attach report
  await testInfo.attach('accessibility results', {
    body: JSON.stringify(accessibilityScanResult, null, 2),
    contentType: 'application/json',
  });

  console.log(
    "Number of violations: ========>",
    accessibilityScanResult.violations.length
  );

  // Assertion
  expect(accessibilityScanResult.violations.length).toEqual(0);
});
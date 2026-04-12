import { test, expect } from "@playwright/test";

test("verify the checkbox", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  for (const day of days) {
    const checkbox = page.getByLabel(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
 /*for (const day of days.slice(-3)) {

  const checkbox = page.getByLabel(day);
  await checkbox.check();
  await expect(checkbox).toBeChecked();

}*/

  await page.waitForTimeout(5000);

});
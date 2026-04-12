import { test, expect } from "@playwright/test";




const logintestcase: string[][] = [
  ["laura.taylor1234@example.com", "test123", "Valid"],
  ["abcdad@gmail.com", "test@143", "Invalid"],
  ["asdfghj@gmail.com", "test567@134", "Invalid"],
];

test.describe("login data driven", () => {

  for (const [email, password, validity] of logintestcase) {

    test(`Login Test case ${email} and ${password}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");

      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator('input[value="Log in"]').click();

      if (validity.toLowerCase() === 'valid') {   // ✅ FIXED

        const logoutlink = page.locator('a[href="/logout"]');
        await expect(logoutlink).toBeVisible({ timeout: 5000 });

      } else {

        const errrmessage = page.locator('.validation-summary-errors');
        await expect(errrmessage).toBeVisible({ timeout: 5000 });

      }

    });

  }

});
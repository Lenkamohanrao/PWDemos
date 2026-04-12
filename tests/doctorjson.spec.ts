import { test, expect } from "@playwright/test";
import fs from 'fs'
//import { parse } from 'csv-parse/sync';

// Read JSON
const logindata = JSON.parse(fs.readFileSync("tests/testdata/data.json", "utf-8"));

test.describe("login data driven", () => {
  for (const data of logindata) {
    test(`Login Test: ${data.email}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator('input[value="Log in"]').click();

      if (data.status.toLowerCase() === "valid") {
        const logoutlink = page.locator('a[href="/logout"]');
        await expect(logoutlink).toBeVisible({ timeout: 5000 });
      } else {
        const errrmessage = page.locator(".validation-summary-errors");
        await expect(errrmessage).toBeVisible({ timeout: 5000 });
      }
    });
  }
});
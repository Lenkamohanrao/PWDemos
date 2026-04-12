import { test, expect } from "@playwright/test";
import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

// Define the shape of CSV row
interface LoginData {
  email: string;
  password: string;
  status: string;
}

// Resolve CSV file path
const csvPath = path.resolve(__dirname, "testdata/data.csv");  

// Read and parse CSV
const fileContent = fs.readFileSync(csvPath, "utf-8");
const records: LoginData[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
}) as LoginData[]; // ✅ cast as LoginData array

test.describe("Login Data Driven Tests", () => {
  for (const data of records) {
    test(`Login Test: ${data.email} / ${data.password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator('input[value="Log in"]').click();

      if (data.status.toLowerCase() === "valid") {
        const logoutLink = page.locator('a[href="/logout"]');
        await expect(logoutLink).toBeVisible({ timeout: 5000 });
      } else {
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({ timeout: 5000 });
      }
    });
  }
});
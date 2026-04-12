import { test, expect } from "@playwright/test";

test("verify stock table", async ({ page }) => {

  await page.goto("https://www.nseindia.com/option-chain");
})
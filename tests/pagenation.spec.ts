import { test, expect } from '@playwright/test';

test("pagination test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pages = page.locator("ul.pagination li");
    const pageCount = await pages.count();

    for (let p = 0; p < pageCount; p++) {

        // Click pagination
        await pages.nth(p).click();

        // Wait for table to load
        await page.waitForTimeout(2000);

        // Get table rows
        const rows = page.locator("#productTable tbody tr");
        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            const rowText = await rows.nth(i).innerText();
            console.log(`Page ${p + 1} Row ${i + 1}: ` + rowText);
        }
    }
});
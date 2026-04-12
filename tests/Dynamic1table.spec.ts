import { test, expect, Locator } from "@playwright/test";

test("verify the dynamic table", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const table: Locator = page.locator("#taskTable tbody");
  const rows = await table.locator("tr").all();

  await expect(rows).toHaveLength(4);

  for (const row of rows) {

    const cells = await row.locator("td").innerText();
    const name = cells[0];

    if (name === "Chrome") {
      console.log("CPU LOAD IS", cells[1]);
      console.log("Network speed of Chrome process", cells[2]);
    }

    if (name === "Firefox") {
      console.log("Memory Size of Firefox process", cells[3]);
      console.log("Disk space of Firefox process", cells[4]);
    }

  }

  await page.waitForTimeout(5000);

});
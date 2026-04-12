import { test, expect } from "@playwright/test";

test("select multiple dropdown", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // select multiple colors
  await page.locator("#colors").selectOption(["Red", "Blue", "Green"]);

  const options = page.locator("#colors option");
  
  // verify total options
  await expect(options).toHaveCount(7);

  // get all option texts
  const colors = (await options.allTextContents()).map(c => c.trim());

  console.log(colors);

  // verify Green exists
  //expect(colors).toContain("Green");

});
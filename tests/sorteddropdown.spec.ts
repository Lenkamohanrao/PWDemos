import { test, expect } from "@playwright/test";

test("verify elements sorted or not", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const options = page.locator("#colors option");

  // get dropdown text
  const list = (await options.allTextContents()).map(t => t.trim());

  // copy original list
  const original = [...list];

  // sort list
  const sorted = [...list].sort();

  console.log("Original:", original);
  console.log("Sorted:", sorted);

  // verify sorted or not
  //expect(original).toEqual(sorted);

  expect(list).not.toEqual([...list].sort());

});
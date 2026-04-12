import { test, expect } from "@playwright/test";
import { count } from "node:console";

test("verify dropdown", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const text=await page.locator("#country").selectOption({ index: 3 });
  console.log("printing single value",text)

  const options = page.locator("#country option");
  

  await expect(options).toHaveCount(10);

  const texts = (await options.allTextContents()).map(t => t.trim());
  //const text = await options.allTextContents()
  console.log(texts);
  console.log("total all texts are present in single select",texts.length)

  //expect(texts).toContain("Japan");

  

});
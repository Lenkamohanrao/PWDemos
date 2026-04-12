import{test,expect,chromium}from "@playwright/test"

test("verify the context",async({})=>{
const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
const page2=await context.newPage();
 await page1.goto("https://playwright.dev/");
 await page2.goto("https://www.selenium.dev/");
 await page1.waitForTimeout(5000)
 await page2.waitForTimeout(5000)



})
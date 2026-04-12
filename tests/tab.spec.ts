import{test,expect,chromium}from "@playwright/test"

test("verify tab",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const parentpage=await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/")
    const [childpage]=await Promise.all([context.waitForEvent('page'),parentpage.locator("button:has-text('New Tab')").click()]);

    console.log("Parent page Titele Is",await parentpage.title());
    console.log("child page Title IS",await childpage.title());




                  






})
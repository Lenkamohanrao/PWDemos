import{test,expect,chromium}from "@playwright/test"

test("Verify the right click button",async({})=>{
const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

const Rightaction=page.locator(".context-menu-one btn btn-neutral")
Rightaction.click({button:'right'})
await page.waitForTimeout(5000);



})
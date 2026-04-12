import{test,expect,chromium} from "@playwright/test"

test("verify Mouce actions",async({})=>{
const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage()
await page.goto("https://testautomationpractice.blogspot.com/");
const pointme=page.locator(".dropbtn")
await pointme.hover();
const laptops=page.locator(".dropdown-content a:nth-child(1)")
await laptops.hover();
await page.waitForTimeout(5000);

})
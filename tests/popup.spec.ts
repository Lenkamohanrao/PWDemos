import{test,expect,chromium} from "@playwright/test"

test("verify the popup windows",async({})=>{
    const browser=await chromium.launch()
    const context=await browser.newContext();
    const page=await    context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])
    const allwindowpopup= context.pages()
    console.log("Number of windows are opened",allwindowpopup.length)
    console.log(allwindowpopup[0].url());
    console.log(allwindowpopup[1].url());
    allwindowpopup[1].url();
    await page.waitForTimeout(5000)


})
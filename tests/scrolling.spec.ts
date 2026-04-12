import{test,expect,Locator}from "@playwright/test"

test("verify the scrolling",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const itemlist=page.locator("#comboBox")
    await itemlist.click();
    const alllocator=page.locator("#dropdown div:nth-child(89)")
    console.log("selected item is",await alllocator.innerText());
    alllocator.click();

    await page.waitForTimeout(5000);










})
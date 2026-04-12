import{test,expect,Locator}from "@playwright/test"

test("Verify confirm alertbox",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
page.on("dialog",dialog=>{
    console.log("dialog type is",dialog.type())
    expect(dialog.type()).toContain("confirm")
    console.log("confirmation Dialog text",dialog.message())
    expect(dialog.message()).toContain("Press a button!")


    dialog.accept();
})
await page.locator("#confirmBtn").click();
const pressedmessage=await page.locator("#demo").innerText();
console.log("Pressed Message is",pressedmessage)
await page.waitForTimeout(5000)
})
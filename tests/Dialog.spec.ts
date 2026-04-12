import{test,expect,Locator} from "@playwright/test"

test("verify dialog box",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
page.on("dialog",(dialog)=>{
console.log("Dialog type is",dialog.type())
expect(dialog.type()).toContain("alert")
console.log("Dialog Text",dialog.message());
expect(dialog.message()).toContain("I am an alert box!")
 dialog.accept()
})
await page.locator("#alertBtn").click();
await page.waitForTimeout(5000)


})
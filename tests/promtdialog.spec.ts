import{test,expect,Locator} from "@playwright/test"


test("Verify PromtAlert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
page.on("dialog",dialog=>{
console.log("Dialog Type is",dialog.type());
expect(dialog.type()).toContain("prompt")
console.log("Dialog Message is",dialog.message())
expect(dialog.message()).toContain("Please enter your name")
expect(dialog.defaultValue()).toContain("Harry Potter")
dialog.accept("john");

})
await page.locator("#promptBtn").click();
const dialogtext=await page.locator("#demo").innerText();
console.log("PromtText is",dialogtext)
await page.waitForTimeout(5000)








})
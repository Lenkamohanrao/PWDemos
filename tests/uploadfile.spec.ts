import{test,expect,Locator} from "@playwright/test"

test("verify the upload file",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#singleFileInput").setInputFiles("tests/Uploads/MM_Fund_Switch_Redirection_ESB_getvalidationdetails_analysis.txt");

await page.locator("button:has-text('Upload Single File')").click();
const msg=await page.locator("#singleFileStatus").textContent();

expect(msg).toContain("Single file selected: MM_Fund_Switch_Redirection_ESB_getvalidationdetails_analysis.txt, Size: 5959 bytes, Type: text/plain")
console.log("file upload successfull");
await page.waitForTimeout(5000);













})
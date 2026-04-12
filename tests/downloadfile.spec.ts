import{test,expect,Locator} from "@playwright/test"
import fs from 'fs'

test("Verify the download of the file",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
const textbox=page.locator("#inputText")
await textbox.click()
await textbox.fill("chaitanya")
const buton=await page.locator("#generateTxt").click();
const [download]=await Promise.all([page.waitForEvent('download'),page.locator("#txtDownloadLink").click()])
 //page.waitForEvent('download')
//page.locator("#txtDownloadLink").click();
const downloadpath='Downloads/info.txt'
await download.saveAs(downloadpath)
const fileexists=fs.existsSync(downloadpath)
expect(fileexists).toBeTruthy();
//const buton=await page.locator("#generateTxt").click();
//await page.waitForTimeout(5000);

})
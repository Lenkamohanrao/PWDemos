import{test,expect,Locator} from '@playwright/test'
import fs from 'fs'

test("verify the download path",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

await page.locator("#inputText").fill("chaitanya");
//await page.waitForEvent('download');
//await page.locator("txtDownloadLink").click();
await page.locator("#generateTxt").click();
const [download]=await Promise.all([
    page.waitForEvent('download'),page.locator("#txtDownloadLink").click()
])
const downloadpath='downloads/info.txt'
await download.saveAs(downloadpath)
const fileexists=fs.existsSync(downloadpath)
expect(fileexists).toBeTruthy();







})
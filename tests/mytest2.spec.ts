import {test,expect} from "@playwright/test"
import { url } from "node:inspector"

test("url of the webpage",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let url1:string=await page.url();
    console.log(url1)
    await expect (page). toHaveURL("https://testautomationpractice.blogspot.com/")

})
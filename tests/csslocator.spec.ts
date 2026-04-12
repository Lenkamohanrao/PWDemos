import {test,expect,Locator} from "@playwright/test"

test("verify css locator",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    
    await expect(page.locator("tag#small-searchterms")).toBeVisible()
    await page.locator("tag#small-searchterms").fill("T-Shirts")
    
// tag with id tag#id
// tag classname tagname.classname
// tag with in any attribute value tag[attribute=value]
// tag with class and atribute tag.claa[attribute=value]




})
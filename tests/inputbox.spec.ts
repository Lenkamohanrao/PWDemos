import {test,expect,Locator} from "@playwright/test"

test("verify input box",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const Textbox:Locator=page.locator("#name")
    await expect(Textbox).toBeVisible();
    await expect(Textbox).toBeEnabled();
    await Textbox.fill("shubham")
    const enteredvalue=await Textbox.inputValue();
    console.log("Entred value is",enteredvalue);
    expect(enteredvalue).toBe('shubham')
    await page.waitForTimeout(5000);
    

   // importent points  goto,page.title,page.url,page.locator,inputvalue,ischecked test only execute only particuler task
//check tobechecked














})
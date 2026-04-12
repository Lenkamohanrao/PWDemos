import {test,expect,Locator} from "@playwright/test";


test("verify the duplicate elements", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dupicatesx:Locator= page.locator("#colors>Option")

    const rat:string[]=(await dupicatesx.allTextContents()).map(text=>text.trim());
    const unique =new Set<string>()
    const duplicate:string[]=[]
    for(const elements of rat)
    {
        if(unique.has(elements))
        {
            duplicate.push(elements)
        }
        else
        {
             unique.add(elements)
        }
    }
    console.log("duplicates dropdown are",duplicate)
    console.log("Unique elements are",unique)

    

});
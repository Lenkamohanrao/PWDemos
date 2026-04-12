import{test,expect,Locator} from "@playwright/test"

test("auoo suggest dropdown",async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator("#APjFqb").fill("mobile")
    await page.waitForTimeout(5000)
    const option:Locator=page.locator("ul>li")
    const count=await option.count()
    console.log("Number of options",count);
    
  /*  for(let  i=0;i<count;i++)
    {
        console.log(await option.nth(i).innerText());
        
    }*/

     for(let i=0;i<count;i++)
     {
       const text= await option.nth(i).innerText()
       if(text=="mobile")
       {
            option.nth(i).click()
            break;
       }
       

     }
    await page.waitForTimeout(5000);


})
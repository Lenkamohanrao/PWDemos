import {test,expect} from "@playwright/test"

/*test("title",()=>
{

}
)*/

test("verify page title",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
let title:string=await page.title();
console.log(title);
await expect (page).toHaveTitle("Automation Testing Practice")

})

// npx playwright test (to run all tests)
//npx playwright show-report ()  
// npx playwright test --ui
//npx playwright test --debug
// goto it is used to open url
//tohaveTitle //open title of the web page
//to haveURL // open the url of the webpage

test("verify title",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   let url:string=await page.title();
   console.log(url)
    expect (page).toHaveURL("https://testautomationpractice.blogspot.com/")

})

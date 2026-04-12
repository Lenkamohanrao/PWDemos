import{test,expect,Locator} from "@playwright/test"

test("verify Datepickers",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const datepickertext=page.locator("#datepicker")
   // await datepickertext.fill("05/12/2027");
    await datepickertext.click();
   // await page.waitForTimeout(4000)*/

    //---------------------------------------------------------------------------------------
   const year="2030";
   const month="March"
   const date="11"

   while(true)
   {
    const currenntmonth=await page.locator(".ui-datepicker-month").textContent()
    const currentyear=await page.locator(".ui-datepicker-year").textContent();
    if(currenntmonth===month && currentyear===year)
    {
        break
    }

    await page.locator(".ui-datepicker-next").click();
   }
   const alldates=await page.locator(".ui-datepicker-calendar tbody td a").all();
   for(let date1 of alldates)
   {
    const datetext=await date1.innerText();
    if(datetext===date)
    {
      await date1.click();
      break
   }
}
  

   



await page.waitForTimeout(4000)

});
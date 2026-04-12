import{test,expect,Locator}from "@playwright/test"
test("verify text box",async({page})=>{
//await page.goto("https://testautomationpractice.blogspot.com/")
await page.goto("https://www.google.com/")
/*const inputbox=page.locator("#name")
await inputbox.fill("chaitanya")
const mailinputbox=page.locator("#email")
await mailinputbox.fill("chaitanya@gmail.com")
const phoneinputbox=page.locator("#phone");
await phoneinputbox.fill("00000000000")
const adddressinputbox=page.locator("#textarea")
adddressinputbox.fill("mahrastea (v) maharastra(D) house No(2-5-6)")*/


//---------------------------------------------------------------------------------------------

/*const radiobutton=page.locator("#male")
await radiobutton.check();
await expect(radiobutton).toBeChecked();*/

//------------------------------------------------------------------------------------------------

/*const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
for(const day of days.slice(-3))
{
    const checkbox=page.getByLabel(day)
    await checkbox.check()
    await expect(checkbox).toBeChecked();
}*/

//----------------------------------------------------------------------------------------------

/*const singledropdown=page.locator("#country")
const text=await singledropdown.selectOption( {index:4} )
 console.log("single value is",text)

 const alldropdowns = (await page.locator("#country option").allTextContents()).map(t=>t.trim());
console.log("Printing All Dropdowns:", alldropdowns);*/

//-----------------------------------------------------------------------------------------------

/*const multiselectdropdown=page.locator("#colors option")
const multi=(await multiselectdropdown.allTextContents()).map(a=>a.trim());
console.log(multi);*/

//-----------------------------------------------------------------------------------------------
/*const sorteddropdown=page.locator("#colors option")
const multisorteddropdown=(await sorteddropdown.allTextContents()).map(y=>y.trim());
const orginalist=[...multisorteddropdown]
const list=[...multisorteddropdown].sort()
console.log("OrginalList",orginalist);
console.log("Sorted List",list);*/

//----------------------------------------------------------------------------------------------------

//const rows=page.locator("table[name='BookTable'] tbody tr");

//await expect(rows.nth(2).locator("td")).toHaveText(["Learn Java","Mukesh","Java","500"])

//--------------------------------------------------------------------------------------------------

/*const allrows= await rows.all();
const mukeshbooks:string[]=[]
for(const row of allrows.slice(1))
{
    const cells=await row.locator("td").allInnerTexts()
    const author=cells[1]
    const bookname=cells[0]
    if(author==="Mukesh")
    {
      console.log(bookname,author)
      mukeshbooks.push(bookname)
    }
}*/
//------------------------------------------------------------------------------------------------
const goofleinputbox=await page.locator("#APjFqb").fill("mobile")
await page.waitForTimeout(5000)
const option:Locator=page.locator("ul>li")
    const count=await option.count()
    console.log("Number of options",count);
    for(let i=0;i<count;i++)
     {
       const text= await option.nth(i).innerText()
       if(text=="mobile")
       {
            option.nth(i).click()
            break;
       }
       

     }














await page.waitForTimeout(2000)



})
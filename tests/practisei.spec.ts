import{test,expect,Locator} from "@playwright/test"

test("verify infinate scrolling",async({page})=>{
    await page.goto("https://www.booksbykilo.in/new-books");
    let previoushweight=0;
    while(true)
    {

    
    await page.evaluate(()=>{

    window.scrollTo(0,document.body.scrollHeight)

    })
    await page.waitForTimeout(5000)

    const currentheight=await page.evaluate(()=>{

     return document.body.scrollHeight
    })
    console.log("Previous Height",previoushweight)
    console.log("Current Height",currentheight)
    if(previoushweight===currentheight)
    {
        break
    }
    previoushweight===currentheight
   }
   console.log("Reached end of the page")
    
})
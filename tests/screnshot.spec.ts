import{test,expect} from "@playwright/test"
test("verify the screenshot",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
const timestamp=Date.now()
//await page.screenshot({path:'screnshots/'+'homepage'+timestamp+'.png'})

await page.screenshot({path:'screnshots/'+'fullpage'+'homepage'+timestamp+'.png',fullPage:true})




})
import{test,expect} from '@playwright/test'

import{LoginPage} from '../pages/LoginPage'

import{Homepage} from '../pages/Homepage'

import{cartPage} from '../pages/Cartpage'

test("user can login add [product to the cart",async({page})=>{
await page.goto("https://demoblaze.com/index.html")

//loginpage
const loginpage=new LoginPage(page)
/* await loginpage.clickLoginlink();
await loginpage.enterUserName('pavanol');
await loginpage.enterPassword('test@123');
await loginpage.clickonLoginutton();*/

await loginpage.performLogin("pavanol","test@123")

//homepage
const homepage=new Homepage(page)
await homepage.addproducttocart("Samsung galaxy s6");
await page.waitForTimeout(2000)
await homepage.addtocart();
await page.waitForTimeout(2000);

//cartpage
 const cartpage=new cartPage(page)
 const isproductincart= await cartpage.checkproductincart("Samsung galaxy s6")

 expect(isproductincart).toBe(true)






})
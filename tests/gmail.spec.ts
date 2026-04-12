 import{test,expect,Locator} from "@playwright/test"

 test("verify gmail",async({page})=>{
 await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S1244047160%3A1773043267425082&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASfE1-q5FzFdwgZIAwOLc4duJ2uIGW8ttwK3625RooSJKrr707QlZOA-zo_RXYMQF5EYgK5MbDPG8g&osid=1&service=mail")

 const name:Locator=page.locator("#identifierId")

 await name.fill("lenkachaitanya427@gmail.com")
 await page.waitForTimeout(5000)




 })


import {test,expect} from "@playwright/test"

test("verify the basic auth",async({request})=>{
const response=await request.get("https://httpbin.org/basic-auth/user/pass",{
                   headers:{authorization:"Basic "+Buffer.from("user:pass").toString('base64')}
                 
})
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200)






})
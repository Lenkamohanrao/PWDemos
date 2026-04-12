import{test,expect} from "@playwright/test"

test("verify auth",async({request})=>{
 const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")

expect(response.ok()).toBeTruthy();
const responsebody=await response.json();
console.log(responsebody)
})
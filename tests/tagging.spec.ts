import{test,expect} from "@playwright/test"

test("verify the tagging testtest",{tag:'@regression'},async({page})=>{
await page.goto("https://www.google.com/")
await page.locator("text='Store'").click();
await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")
})

test("verify the tagging",{tag:'@sanity'},async({page})=>{
await page.goto("https://www.google.com/")
await page.locator("text='Store'").click();
await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories")

})

test("verify the sanity and regression",{tag:['@sanity','@regression']},async({page})=>{
await page.goto("https://www.google.com/")
await page.locator("text='Store'").click();
await  page.locator("text='Popular on the Google Store.'")
})


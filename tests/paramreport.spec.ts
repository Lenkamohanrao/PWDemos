import{test,expect} from "@playwright/test"

test.beforeEach("lanuch url",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");

})

test("Logo test",async({page})=>{
const logo=page.locator("img[alt='Tricentis Demo Web Shop']")
await expect(logo).toBeVisible();
})

test("Title test",async({page})=>{
const test=page.title()
expect(await test).toContain("Demo Web Shop")
})

test("search test",async({page})=>{
await page.locator("#small-searchterms").fill("14.1-inch Laptop")

await page.locator("input[value='Search']").click();

})


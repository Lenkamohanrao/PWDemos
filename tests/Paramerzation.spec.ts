import{test,expect} from "@playwright/test"
const searchItems:string[]=['14.1-inch Laptop','$100 Physical Gift Card','Smartphone','monitor']
for(const item of searchItems)
{
test(`search test for ${item}`,async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")

await page.locator("#small-searchterms").fill(item)

await page.locator("input[value='Search']").click();

await expect.soft(page.locator('h2 a').nth(0)).toContainText(item);

})
}

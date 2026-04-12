import{test,expect} from "@playwright/test"

test.only("Verify Google",async({page})=>{
await page.goto("https://www.google.com/?zx=1774789104337&no_sw_cr=1")
await expect(page).toHaveTitle("Google");
})

test("Verify Google",async({page})=>{
await page.goto("https://www.google.com/?zx=1774789104337&no_sw_cr=1")
await expect(page).toHaveTitle("Google");
})
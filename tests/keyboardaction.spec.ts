import{test,expect}from "@playwright/test"

test("verify the keybord actions",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

const input1=page.locator("#input1")
await input1.focus();

await page.keyboard.insertText("chaitanya")

await page.keyboard.press('Control+A')

await page.keyboard.press('Control+C')

await page.keyboard.press('Tab')
await page.keyboard.press('Tab');

await page.keyboard.press('Control+V')

await page.keyboard.press('Tab')
await page.keyboard.press('Tab')

await page.keyboard.press('Control+V')

await page.waitForTimeout(5000)

})
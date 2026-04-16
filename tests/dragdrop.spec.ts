import{test,expect,Locator} from "@playwright/test"

test("verfy the drag and drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const source=page.locator("#draggable");
    const target=page.locator("#droppable");
    await source.dragTo(target);
    await page.waitForTimeout(5000)
})
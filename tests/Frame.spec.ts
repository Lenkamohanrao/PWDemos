import{test,expect,Locator}from "@playwright/test"


test("verify the Frame of the page",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");
//const frames=page.frames()
//console.log("Total Frame length is",frames.length)
const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
if(frame)
{
  await frame.locator("[name='mytext1']").fill("chaitanya")
}
else
{
    console.log("Frame is not available")

}
await page.waitForTimeout(5000)
})
import{test,expect,Locator} from "@playwright/test"

test("verify innerframe",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")
const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
if(frame)
{
    await frame.locator("[name='mytext3']").fill("Lenka")
    const childframes=frame.childFrames()
    console.log("Total ChildFrames oFframe3 is:",childframes.length)
    const radio=childframes[0].getByLabel("I am a human")
    await radio.check();
}
else
{
    console.log("Frame3 not availble")
}
await page.waitForTimeout(5000)
})
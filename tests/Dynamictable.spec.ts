import { test, expect, Locator } from "@playwright/test";

test("verify the dynamic table", async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/dynamic-table", { waitUntil: "domcontentloaded" });

  const table=  page.locator("table.table tbody");
  const rows=await table.locator("tr").all();

  let cpuload = "";

  for (const row of rows) {

    const processname=await row.locator("td").nth(0).innerText();
    

    if(processname==="Chrome") {
        cpuload=await row.locator('td:has-text("%")').innerText()
      console.log("Chrome CPU from table:", cpuload);
      break;
    }
  }

  const yellowCPU:string=await page.locator("#chrome-cpu").innerText();
  console.log("Yellow CPU text:", yellowCPU);
if(yellowCPU.includes(cpuload))
{
  console.log("cpu LOad of chrome is equal")
}
else
{
  console.log("cpu LOad of chrome is Not equal")


}
   
   await page.waitForTimeout(5000)

});
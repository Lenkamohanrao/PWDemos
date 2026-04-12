import{test,expect,Locator} from "@playwright/test"

test("verify the Dynamic table",async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table")
    const table:Locator=page.locator("table.table tbody")
    const rows:Locator[]=await table.locator("tr").all();
    expect(rows).toHaveLength(4)
    let cpuload=''
    for(const row of rows)
    {
        const processname:string=await row.locator("td").nth(0).innerText();
        if(processname==='Chrome')
        {
            cpuload=await row.locator('td:has-Text("%")').innerText();
            //cpuload=await row.locator('td:has-text("%")').innerText()
            console.log("CPU LOAD IS",cpuload);
        }
    }
    const yellowtext:string=await page.locator("#chrome-cpu").innerText();
    if(yellowtext.includes(cpuload))
    {
        console.log("CPU Load Of chrome is equal")
    }
    else
    {
         console.log("CPU Load Of chrome is not equal")
    }

    page.waitForTimeout(5000);
})
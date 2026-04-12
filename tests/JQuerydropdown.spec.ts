import { test, expect } from "@playwright/test"

test("verify dynamic dropdown calendar", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")

  const textbox = page.locator("#txtDate")
  await textbox.click()

  const year = "2031"
  const month = "Mar"
  const date = "13"

  // select year
  await page.locator(".ui-datepicker-year").selectOption(year)

  // select month
  await page.locator(".ui-datepicker-month").selectOption({ label: month })

  // select date
  const alldates = await page.locator(".ui-datepicker-calendar tbody td a").all()

  for (let d of alldates)
  {
    const datetext = await d.innerText()

    if (datetext === date)
    {
      await d.click()
      break
    }
  }

  await page.waitForTimeout(5000)

})
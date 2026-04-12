import { test, expect } from "@playwright/test";

test("verify static web table", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const rows = page.locator("table[name='BookTable'] tbody tr");

  // verify rows and columns
  await expect(rows).toHaveCount(7);
  const columns = page.locator("table[name='BookTable'] tbody th");
  await expect(columns).toHaveCount(4);

  // verify second row
  await expect(rows.nth(1).locator("td")).toHaveText([
    "Learn Selenium",
    "Amit",
    "Selenium",
    "300"
  ]);

  // print only mukesh books
  const allRows = await rows.all();
  const mukeshbooks: string[] = [];

  let totalPrice = 0;   // 👉 added

  for (const row of allRows.slice(1)) {
    const cells = await row.locator("td").allInnerTexts();

    const author = cells[1];
    const bookname = cells[0];
    const price = Number(cells[3]);   // 👉 get price column

    totalPrice += price;              // 👉 add price

    if (author === 'Mukesh') {
      console.log(author, bookname);
      mukeshbooks.push(bookname);
    }
  }

  console.log("Total Price:", totalPrice);  // 👉 print total

  expect(mukeshbooks).toHaveLength(2);

  // optional assertion for total
  expect(totalPrice).toBe(7100);

  await page.waitForTimeout(5000);

});
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("button[onclick='logIn()']").click();

  // Wait for logout button (login success indicator)
  await expect(page.locator("#logout2")).toBeVisible();
});

test.afterEach(async ({ page }) => {
  await page.locator("#logout2").click();
});

test("Verifying number of products", async ({ page }) => {
  const products = page.locator("#tbodyid .hrefch");

  await expect(products).toHaveCount(9);
});

test("Add to cart", async ({ page }) => {
  await page.locator('a:has-text("Samsung galaxy s6")').click();

  // Handle alert
   page.on("dialog", async dialog => {
    console.log("Dialog type:", dialog.type());
    await dialog.accept();
  });

  await page.locator(".btn.btn-success.btn-lg").click();
});
import { test, expect } from '@playwright/test';

test('Radio button test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const radio = page.locator('#female');

  // Check radio button status before click
  await expect(radio).toBeVisible();
  await expect(radio).toBeEnabled();
  await expect(radio).not.toBeChecked();

  // Click the radio button
  await radio.check();

  // Verify radio button is selected
  await expect(radio).toBeChecked();

  await page.waitForTimeout(5000);

});
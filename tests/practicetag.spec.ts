import { test } from '@playwright/test';

test('verify the first method @sanity', async ({ page }) => {
    console.log("verify the sanity test case");
});

test('verify second method @regression', async ({ page }) => {
    console.log("verify the second method");
});

test('verify the third method @sanity @regression', async ({ page }) => {
    console.log("verify the third method");
});
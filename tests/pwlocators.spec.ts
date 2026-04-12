//page.getByRole() to locate by explicit and implicit accessibility attributes.
//page.getByText() to locate by text content.(non interactive elements)
//page.getByLabel() to locate a form control by associated label's text.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByAltText() to locate an element, usually image, by its text alternative.
//page.getByTitle() to locate an element by its title attribute.
//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import {test,expect,Locator} from "@playwright/test"
test("verify title",async ({page})=>{
await page.goto("https://demo.nopcommerce.com/")
const logo:Locator=page.getByAltText("nopCommerce demo store");
await expect (logo).toBeVisible();
const text:Locator=page.getByText("Welcome to our store")
expect (logo).toBeVisible();
await page.getByRole("link",{name:'Register'}).click();
await expect(page.getByRole("link",{name:'Register'})).toBeVisible();
await page.getByLabel("First name:").fill("chaitanya");
await page.getByLabel("Last name:").fill("Lenka")
page.getByLabel("Email:").fill("@getMaxListeners.com")



})
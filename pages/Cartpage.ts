import{Page,Locator} from '@playwright/test'


export class cartPage
{
   private readonly page:Page;
   private  productNameInCart: Promise<Array<Locator>>

constructor(page: Page) 
{
    this.page = page;
    this.productNameInCart = this.page.locator('#tbodyid tr td:nth-child(2)').all();
}
async checkproductincart(productname:string):Promise<boolean>
{
    const products = await this.productNameInCart;
    for(const product of products)
    {
       const name:any=(await product.textContent())?.trim();
       console.log(name)
       if(name===productname)
       {
        return true;
       }
    }
    return false;
}

}
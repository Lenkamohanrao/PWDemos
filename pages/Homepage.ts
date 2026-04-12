import{Page,Locator} from '@playwright/test'

export class Homepage
{
private readonly page:Page
//private readonly productListLocator : string;
private readonly productlist : Promise<Array<Locator>>
private readonly addTocartButton :Locator;
private readonly cartLink : Locator;


constructor(page:Page)
{
    this.page=page;
// locating all products
 this.productlist=this.page.locator('div#tbodyid div.card h4.card-title a').all();
// add to cart button
this.addTocartButton = this.page.locator('text=Add to cart');
//cart link 

this.cartLink=this.page.locator('#cartur')
}
// methods
async addproducttocart(productName:string):Promise<void>
{
  const productelements=this.productlist;
  for(const product of await productelements)
  {
     const name=await product.textContent();
     if(name?.trim()===productName)
     {
         await product.click();
         break;
     }
  }
  this.page.once('dialog',async(dialog)=>{
if(dialog.message().includes('added'))
{
    await dialog.accept();
}


  })
  await this.addTocartButton.waitFor({ state: 'visible' });

  //this.addTocartButton = this.page.getByRole('link', { name: 'Add to cart' });
await this.addTocartButton.click();

  
}
async addtocart()
{
    await this.cartLink.click();
}

}

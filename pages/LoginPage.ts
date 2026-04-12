import{Page,Locator} from '@playwright/test'
export class LoginPage
{  
    // Define Varibles
    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly username:Locator;
    private readonly password :Locator;
    private readonly loginbutton:Locator

    // Define Constructor

    constructor(page:Page)
    {
       this.page=page;
       this.loginlink=this.page.locator('#login2')
       this.username=this.page.locator('#loginusername')
       this.password=this.page.locator('#loginpassword')
       this.loginbutton=this.page.locator("button[onclick='logIn()']")
    }

    async clickLoginlink():Promise<void>
    {
        await this.loginlink.click();
    }

    async enterUserName(username:string):Promise<void>
    {
         await this.username.clear();
         await this.username.fill(username)
    }
    async enterPassword(password:string):Promise<void>
    {
        await this.password.clear();
        await this.password.fill(password)
    }
    async clickonLoginutton():Promise<void>
    {
        await this.loginbutton.click();
    }

    async performLogin(username:string,password:string)
    {
        await this.clickLoginlink()

        await this.enterUserName(username)

        await this.enterPassword(password)
        await this.clickonLoginutton();
    }


    
    
    

}

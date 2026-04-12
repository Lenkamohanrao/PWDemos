import{test} from "@playwright/test"

test.describe('group1',()=>{
    test("Test1",async({page})=>{
      console.log("this is first test1")
    })
    
    test("Test2",async({page})=>{
      console.log("this is first test2")
    })

   
    test("Test3",async({page})=>{
      console.log("this is first test3")
    })
    
    test("Test4",async({page})=>{
      console.log("this is first test4")
    })
   
    test("Test5",async({page})=>{
      console.log("this is first test5")
    })

})
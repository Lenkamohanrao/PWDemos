import{test,expect}from "@playwright/test"

test("verify the Booking ID path parameter",async({request})=>{
    const bookingId=1;
const response=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
const responsebody=await response.json()
console.log(responsebody);
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);
})
import { test, expect } from "@playwright/test";

test("verify the post api request", async ({ request }) => {

  const requestBody = {
    firstname: "Mark",
    lastname: "Wilson",
    totalprice: 344,
    depositpaid: true,
    bookingdates: {
      checkin: "2021-09-20",
      checkout: "2023-01-18"
    }
  };

  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    { data: requestBody }
  );

  const responseBody =  await response.json();
  console.log(responseBody);

  // Status validations
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Response structure validation
  expect(responseBody).toHaveProperty("bookingid");
  expect(responseBody).toHaveProperty("booking");

  const booking = responseBody.booking;

  // Booking details validation
  expect(booking).toMatchObject({
    firstname: "Mark",
    lastname: "Wilson",
    totalprice: 344,
    depositpaid: true,
    
  });

  // Booking dates validation
  expect(booking.bookingdates).toMatchObject({
    checkin: "2021-09-20",
    checkout: "2023-01-18"
  });

});
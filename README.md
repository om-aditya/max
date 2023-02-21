
## Quick start

1.  Clone this repo using <br />`git clone https://github.com/Max-payments/maxshop-staging.git`
2.  Move to the appropriate directory: <br />`cd maxpayshop`.<br />
3.  Run `npm install` or `npm i` in order to install dependencies.<br />
4.  Run `npm run dev` to see the example app at `http://localhost:3000`._


Now you're ready to start!


## Documentation

 Routes for visiting different pages are mentioned below 👍 <br/>

- **Index Page** - This is the Home Page or Landing Page : <br/> `http://localhost:3000/`
- **Get OTP page** - This is the page for user authentication where user can authenticate himself using OTP or Login using Social Media platforms such as Google, Facebook, Discord : <br/> `http://localhost:3000/getOtp`
- **Verify OTP page** - This is the next page for user authentication where user can validate OTP or Verify the OTP received, User can also resend OTP : <br/> `http://localhost:3000/verifyOtp`
- **Voucher Details page** - This is the voucher details page where user can find details about steam voucher's quantity, pricing, payment modes : <br/> `http://localhost:3000/voucher`
- **Transaction Success page** - This page will be shown to user when the transaction is successful : <br/> `http://localhost:3000/success`
- **Transaction Failure page** - This page will be shown to user when the transaction is unsuccessful or Failed : <br/> `http://localhost:3000/error`
- **Login page** - This page is created for testing of Login Service integration using next-auth.js : <br/> `http://localhost:3000/login`

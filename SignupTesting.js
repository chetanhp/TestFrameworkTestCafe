import {Selector} from "testcafe";

const loginLink=Selector('button').withText('Log in');
 const signupLink=Selector('a').withText('Registrer nu');
const registerdCountry=Selector('#countryCode');
const danmark=Selector('#mat-option-6 > span');
 const registrationNumber=Selector('#mat-input-3');
 const firstName=Selector('#mat-input-4');
 const lastName=Selector('#mat-input-5');
const email=Selector('#mat-input-6');
 const emailConfirmation=Selector('#mat-input-7');
 const phoneNumber=Selector('#mat-input-8');
 const signupConsent=Selector('#mat-checkbox-2 > label');
 const createAccount=Selector('button').withText('Opret konto');
 const verifyConfirmEmail=Selector('h1');

fixture('My Fixture')
.page('https://app-demo.novemberfirst.com/#/public')

    
test('verify valid signup ', async t => {

    await t 
    .maximizeWindow()
    .takeScreenshot("SignUpPage.png")
    .expect(signupLink.exists).ok()
    .click(signupLink)
   .wait(2000)
    .click(registerdCountry)
    .wait(1000)
   .click(danmark)
   .wait(1000)
    .typeText(registrationNumber , '32142516')
    .typeText(firstName , 'chetan')
    .typeText(lastName , 'hp')
    .typeText(email ,'chetanhpbhardwaj@gmail.com')
    .typeText(emailConfirmation , 'chetanhpbhardwaj@gmail.com' )
    .typeText(phoneNumber , '1234567890')
    .click(signupConsent)
    .click(createAccount)
    .expect(verifyConfirmEmail.exists).ok()
    .takeScreenshot("AccountCreatedSuccessfully.png")

    console.log("Login In link Exists")
    console.log("SinUp link  Exists")
    console.log("Account Created successfuly")
});
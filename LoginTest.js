import {Selector} from "testcafe";

const signupLink=Selector('a').withText('Registrer nu');
const forgotPasswordLink= Selector('a').withText('Glemt adgangskode?');

fixture('My Fixture')
.page('https://app-demo.novemberfirst.com/#/public')

test ('My SignUpTest' , async t=>  {

    await t
    .maximizeWindow()
    .takeScreenshot("LoginPage.png")
    .expect(signupLink.exists).ok()
    .expect(forgotPasswordLink.exists).ok();

    console.log("SignupLink Exists")
    console.log("forgotPasswordLink Exists")

});
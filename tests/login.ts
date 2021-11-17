import {Role, Selector} from 'testcafe';

fixture `Ahana Login`
    .page `https://sumanas.medizura.com/login`;

test('Login test', async t => {
    // Test code
    await t.typeText('input[type="text"]', 'ajay')
        .typeText('input[type="password"]', '123456')
        .click('button[class="btn btn-block btn-lg btn-info"]')
        .wait(4000);

    await t.navigateTo('https://sumanas.medizura.com/pharmacy/create-sale')
        .wait(4000)
        .typeText(Selector('[id="patientName"]'),'p')
});
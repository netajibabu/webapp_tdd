import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:1337`;

test('My first test', async t => {
    await t
        .expect(Selector('#headLogin').innerText).eql('Log In')
        .expect(Selector('#userNtid').exists).ok()
        .expect(Selector('#btnSubmit').exists).ok()
        .typeText(Selector('#userNtid'), 'sneek')
        .click(Selector('#btnSubmit'))
        .wait(3000)
});
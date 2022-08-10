import { Selector } from 'testcafe'

fixture('Bug Demo')
    .page("http://localhost:8080");

for (let i = 1; i < 10; i++) {
    test(`Test ${i}`, async t => {
        await t.click("#button")
        await t.expect(Selector("#output").innerText).notEql("loading...")
    })
}
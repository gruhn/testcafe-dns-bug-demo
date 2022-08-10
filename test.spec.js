import { Selector } from 'testcafe'

fixture('Bug Demo')
    .page("https://gruhn.github.io/testcafe-dns-bug-demo/");

for (let i = 1; i < 10; i++) {
    test(`Test ${i}`, async t => {
        await t.click("#button")
        await t.expect(Selector("#output").innerText).notEql("loading...")
    })
}
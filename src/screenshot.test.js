import puppeteer from 'puppeteer'

it('main page', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('http://localhost:5000');

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});
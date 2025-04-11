const express = require('express');
const { chromium ) = require('playwright');

const app = express();

app.set('json spaces', 2);

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://shannz.xyz');
    const title = await page.title();
    return `Title of the page is: ${title}`;
    await browser.close();
}

app.get('/', async (req, res) => {
  res.send('work');
});

app.get('/run-playwright', async (req, res) => {
    const ress = await run();
    res.send(ress);
});

//Running
const PORT = process.env.PORT || 4000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`💡 Server berjalan di http://localhost:${PORT}`);
    });
};

module.exports = app;

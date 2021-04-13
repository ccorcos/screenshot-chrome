// node main.js

const puppeteer = require("puppeteer");

const width = 10000;
const height = 10000;

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // The browser is visible
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    args: [`--window-size=${width},${height}`],
  });

  const page = await browser.newPage();
  await page.goto("https://www.google.com/maps/@37.8971424,-120.584366,17.13z");

  let i = 1;
  setInterval(async () => {
    console.log(i);
    if (i % 10 === 1) {
      const name = `map-${i++}s.png`;
      console.log(name);
      await page.screenshot({ path: name });
    }
  }, 10000);
  // await new Promise((resolve) => setTimeout(resolve, 60000));
  // await page.screenshot({ path: "map.png" });
  // await browser.close();
})().catch(console.error);
// .then(() => process.exit(0));

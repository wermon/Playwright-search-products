// const playwright = require('playwright');
import { chromium } from '@playwright/test';

async function runPlaywright() {
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome"
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  // Now you can interact with the page and perform your tests
  await page.goto('https://example.com');
  // ...

  await browser.close();
}

runPlaywright();
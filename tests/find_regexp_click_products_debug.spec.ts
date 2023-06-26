import { test, expect, Locator, BrowserType, ChromiumBrowser } from '@playwright/test';
import { repeat_action_till_time } from '../utils/utils'
import productsData from './data/searched_products_data.json';
import { chromium } from '@playwright/test';
import { execFile } from 'child_process';

// let search_text_list: string[] = 
let search_text_list: string[] = productsData.search_products_list;
let all_products_xpath: string = "xpath=//div[@class='vvp-item-tile']//span[contains(@class,'a-truncate-full')]"
let till: string = "2023-06-26T17:10";

test('Find products and click it', async ({ }) => {
  
  const context = await chromium.launchPersistentContext("C:\Users\Home\AppData\Local\Google\Chrome\User Data\Default");
  const page = await context.newPage();
  await page.goto('https://concept.droppages.com/');
  for (const product of await page.locator(all_products_xpath).all()){
    let product_link_innerText: string = await product.innerText();
    for (const search_text of search_text_list){
      let regexp: RegExp = new RegExp(search_text, "i");
      if(regexp.test(product_link_innerText)){
        console.log(`"${product_link_innerText}" product is found by ${regexp} regexp`);      
        break;
      }
    }
    await product.locator("xpath=/../../../../span[contains(@class,'a-button')]").click();
  }
});

test('Find products and click it till date', async ({ page }) => {
  await page.goto('https://concept.droppages.com/');
  await repeat_action_till_time(async () => {
    for (const product of await page.locator(all_products_xpath).all()){
      let product_link_innerText: string = await product.innerText();
      for (const search_text of search_text_list){
        let regexp: RegExp = new RegExp(search_text, "i");
        if(regexp.test(product_link_innerText)){
          console.log(`"${product_link_innerText}" product is found by ${regexp} regexp`);      
          break;
        }
      }
      await product.locator("xpath=/../../../../span[contains(@class,'a-button')]").click();
    }
  }, till);
});


async function runPlaywrightOnProfile() {
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

test('Use existing chrome profile', async ({  }) => {
  const context = await chromium.launchPersistentContext("C:\Users\Home\AppData\Local\Google\Chrome\User Data\Default");
  const page = await context.newPage();


  // Now you can interact with the page and perform your tests
  await page.goto('https://example.com');
  // ...

});



test('execute', async ({  }) => {
  const child = execFile('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });

});
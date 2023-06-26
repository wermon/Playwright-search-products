import { chromium, test} from '@playwright/test';
import { repeat_action_till_time } from './../utils/utils'
import productsData from './data/searched_products_data.json';

let search_text_list: string[] = productsData.search_products_list;
let all_products_xpath: string = "xpath=//div[@class='vvp-item-tile']//span[contains(@class,'a-truncate-full')]"

test('Find products and click it till date', async ({  }) => {
  const context = await chromium.launchPersistentContext("MyProfile");
  const page = await context.newPage();
  await page.goto(productsData.products_page_url);
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
  }, 
  productsData.search_till_date,
  productsData.repeat_interval_ms);
});
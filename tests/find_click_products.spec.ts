import { test, expect } from '@playwright/test';

let search_text_list: string[] = ["First", "hand" ];

let contains_keywords_search_expression: string = "";

search_text_list.forEach( (keyword) => {
  keyword = keyword.toLowerCase();
  contains_keywords_search_expression = `${contains_keywords_search_expression} or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'${keyword}')`
})

let searched_products_xpath: string = `//div[@class='vvp-item-tile']//span[contains(@class,'a-truncate-full') and (1=2${contains_keywords_search_expression})]`;


test('Find products and click it', async ({ page }) => {

  await page.goto('https://concept.droppages.com/');

  for (const product of await page.locator(searched_products_xpath).all())
    await product.locator("xpath=/../../../../span[contains(@class,'a-button')]").click();
});
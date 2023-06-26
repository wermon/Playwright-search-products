# Description
This Project gives possibility to search products on the page and click on the button related to the product.
Search config is in searched_products_data.json. Use "search_products_list" json property to specified searched texts.
The text are searched by **case-insensitive RegExp**. 

## Requirements
- Windows(Tested on Windows10)
- Install Chrome
- Install node.js recommended version: https://nodejs.org/en
- Install Playwright #TODO 

## How to run the search:
Run run.bat (double click or using Windows Command Prompt)

## Configuration before run search:
Open searched_products_data.json and configure the following properties:
- search_products_list: list of case-insensitive RegExp texts for products search
- search_till_date: your **local date** till wanna run the search
- repeat_interval_ms: interval of repeating of the search in *milliseconds*
- products_page_url: page url when products are searched like "https://example.com/"

# Description
This Project gives possibility to search products on the page and click on the button related to the product.
Search config is in searched_products_data.json. Use "search_products_list" json property to specify searched texts.
The text are searched by **case-insensitive RegExp**. 

## Requirements
- Operation System: Windows(Tested on Windows10)
- Google Chrome web browser
- Install node.js recommended version: https://nodejs.org/en
- Install Playwright and dependencies: run **install.bat** that located in root folder

## How to run the search:
Execute **run.bat** (double click or using Windows Command Prompt)

### Login session automatically is preserved for the next time: Manually login to the site only for the first time run.bat execution:
During the first run.bat execution you should login manually to the site and then the search script will be able **to keep login session for the all next run.bat executions**.

## Configuration before run search:
Open **searched_products_data.json** and check/change the following properties:
- search_products_list: list of **case-insensitive RegExp** texts for products search
- search_till_date: your **local date** till wanna run the search
- repeat_interval_ms: interval of repeating of the search in *milliseconds*
- products_page_url: page url(like "https://example.com/") where products are searched

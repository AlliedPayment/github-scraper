# GitHub PR Scraper
Scrapes PRs for Jira tickets and prints results into the developer console

**[VIEW RAW](https://raw.githubusercontent.com/AlliedPayment/github-scraper/master/scraper.js)**

## How To

- Open a PR whose commits logs contain JIRA ticket references used for smart commits.
- Open dev tools (`F12` or `Ctrl + Shift + i`)
- Copy scraper.js to clipboard
- Paste scraper.js into console
- Press `Enter` to execute
- Copy list of tickets that are printed to the console

***NOTE: CHROME ONLY***

if you want to save console output to file
`right click` in console and `Save As`

### Usage

#### Basic Usage
***Scrapes the DOM for keys***
``` js
var keys = ['abp', 'ABP', 'Abp', 'aBp', 'aBP', 'ABp'];
var scaper = new Scraper(keys);
scaper.scrape();
scaper.print();
```

#### AdHoc Usage
***Scrapes the provided input***
``` js
var toBeScraped = 'Some string that may contain JIRA tickets like ABP-1234 or ABP-3210'
var keys = ['abp', 'ABP', 'Abp', 'aBp', 'aBP', 'ABp'];
var scaper = new Scraper(keys);
scaper.scrape(toBeScraped);
scaper.print();

// will print ABP-1234 && ABP-3210 to the console
```

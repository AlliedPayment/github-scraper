class Scraper {
  constructor(keys) {
    this.count = 0;
    this.output = '';
    this.keys = keys;
    this.newline = '\r\n';
  }

  scrape(source) {
    source = source ? source : document.body.innerText;
    keys.forEach(key => this.logTickets(key, source));
  }

  // removes duplicate entries from array
  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }

  removeCharacters(item) {
    item = item.replace("'", '');
    item = item.replace(',', '');
    item = item.replace('\n', '');
    item = item.replace('\t', '');
    item = item.replace('\r', '');
    item = item.replace(' ', '');
    return item;
  }

  logTickets(key, source) {
    var regex = new RegExp(`${key}(.{6})`, 'g', 'i');
    // find all JIRA tickets in page
    var found = source.match(regex);
    var cleaned = this.removeDuplicates(found);
    cleaned = cleaned.map(this.removeCharacters);
    if (cleaned.length === 0) return;
    this.count += cleaned.length;
    // convert to string
    var joined = cleaned.join(this.newline);

    // format for output
    this.output += `${joined}${this.newline}`;
  }

  print() {
    const header = `${this.newline}${this.newline}${
      this.count
    } Jira Issues Found\t${this.newline}${this.newline}`;
    const footer = `${this.newline}Scraped @ ${new Date().toISOString()}${
      this.newline
    }`;
    // print to console
    console.log(`%c${header}${this.output}${footer}`, 'color: #bada55');
  }
}

// JIRA project keys (ignore case not working as well as I had hoped.. probably using it incorrectly ¯\_(ツ)_/¯ )
var keys = ['abp', 'ABP', 'Abp', 'aBp', 'aBP', 'ABp'];
var scaper = new Scraper(keys);
scaper.scrape();
scaper.print();

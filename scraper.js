/* jshint esversion:6*/

class Scraper {
    constructor(keys) {
        this.count = 0;
        this.output = '\n\n';
        this.keys = keys;
    }
    
    scrape() {
        keys.forEach(key => this.logTickets(key));
    }

    // removes duplicate entries from array
    removeDuplicates(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }

    logTickets(key) {
        var regex = new RegExp(`${key}(.{5})`, 'g', 'i');

        // find all JIRA tickets in page
        var found = document.body.innerText.match(regex);
        var cleaned = this.removeDuplicates(found);
        if (cleaned.length === 0) return;
        this.count += cleaned.length;
        // convert to string
        var joined = cleaned.join('\n');

        // format for output
        this.output += `${joined}\n`;
    }

    print() {
        // print to console
        console.log(`${this.output}\n\nCount: ${this.count}\n\n`);
    }
}

// JIRA project keys (ignore case not working as well as I had hoped.. probably using it incorrectly ¯\_(ツ)_/¯ )
var keys = ['abp', 'ABP', 'Abp', 'aBp', 'aBP', 'ABp'];
var scaper = new Scraper(keys);
scaper.scrape();
scaper.print();

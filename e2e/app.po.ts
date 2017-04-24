import { browser, element, by } from 'protractor';

export class HasheePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hashee-main h1')).getText();
  }
}

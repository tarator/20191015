import { AppPage } from './app.po';
import { browser, ElementFinder, by, element } from 'protractor';

describe('starter App', () => {
  let page: AppPage;

  let from: ElementFinder;
  let to: ElementFinder;
  let search: ElementFinder;
  let flights: ElementFinder;
  let firstFlight: ElementFinder;
  let card: ElementFinder;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.manage().window().maximize();

    const navigate = element(by.css(''));
  });


  it('Should show search results.', () => {



  });
});

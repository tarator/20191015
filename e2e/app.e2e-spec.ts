import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // xit disables a test.
  xit('should display welcome message', () => {
    page.navigateTo();


    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should have correct page title.', () => {
    page.navigateTo();


    expect(browser.getTitle()).toEqual('Starter');
  });
});

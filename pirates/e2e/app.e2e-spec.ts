import { PiratesPage } from './app.po';

describe('pirates App', () => {
  let page: PiratesPage;

  beforeEach(() => {
    page = new PiratesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

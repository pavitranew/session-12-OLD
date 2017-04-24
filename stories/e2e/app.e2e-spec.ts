import { StoriesPage } from './app.po';

describe('stories App', () => {
  let page: StoriesPage;

  beforeEach(() => {
    page = new StoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

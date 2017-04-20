import { HasheePage } from './app.po';

describe('hashee App', () => {
  let page: HasheePage;

  beforeEach(() => {
    page = new HasheePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { LetyshopsPage } from './app.po';

describe('letyshops App', function() {
  let page: LetyshopsPage;

  beforeEach(() => {
    page = new LetyshopsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { LetyshopsPage } from './app.po';

describe('letyshops App', () => {
  let page: LetyshopsPage;

  beforeEach(() => {
    page = new LetyshopsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

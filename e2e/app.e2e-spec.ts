import { AngularFundamentals01Page } from './app.po';

describe('angular-fundamentals01 App', () => {
  let page: AngularFundamentals01Page;

  beforeEach(() => {
    page = new AngularFundamentals01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

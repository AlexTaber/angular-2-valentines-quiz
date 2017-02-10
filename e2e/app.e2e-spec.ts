import { ValentinesPage } from './app.po';

describe('valentines App', function() {
  let page: ValentinesPage;

  beforeEach(() => {
    page = new ValentinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

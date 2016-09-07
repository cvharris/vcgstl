import { VcgstlPage } from './app.po';

describe('vcgstl App', function() {
  let page: VcgstlPage;

  beforeEach(() => {
    page = new VcgstlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

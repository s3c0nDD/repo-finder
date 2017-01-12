import { RepoFinderPage } from './app.po';

describe('repo-finder App', function() {
  let page: RepoFinderPage;

  beforeEach(() => {
    page = new RepoFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { VideoClientPage } from './app.po';

describe('video-client App', function() {
  let page: VideoClientPage;

  beforeEach(() => {
    page = new VideoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

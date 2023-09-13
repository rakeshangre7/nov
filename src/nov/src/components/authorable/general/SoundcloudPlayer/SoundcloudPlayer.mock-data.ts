import { SoundcloudPlayerProps } from './SoundcloudPlayer';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: SoundcloudPlayerProps = {
  uid: 'c5f9bf53-a5e6-49f5-97b8-a395bdd9f48d',
  componentName: 'SoundcloudPlayer',
  dataSource: '{6AB6AAC4-3364-4050-8153-05850ABCBB03}',
  fields: {
    soundcloudembedcode: {
      value:
        '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/631377144&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
    },
  },
};

export default defaultData;

export class Channel {
  name: string;
  imgUrl: string;
  channelId: string;


  constructor(name: string, imgUrl: string, channelId?: string) {
      this.name = name;
      this.imgUrl = imgUrl;
      this.channelId = channelId
  }
}

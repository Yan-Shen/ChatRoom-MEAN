import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../channels/channel.service"
import { Channel } from "./channel.model";


@Component({
    selector: 'app-channel-header',
    templateUrl: './channel-header.component.html'
})
export class ChannelHeaderComponent implements OnInit {
    channels: Channel[] = [];
    channel: Channel= new Channel('', '', '')

    constructor(private channelService: ChannelService) {}

    // isLoggedIn() {
    //     return this.authService.isLoggedIn();
    // }
    ngOnInit() {
      this.channelService.getChannels()
            .subscribe(
                (channels: Channel[]) => {
                    this.channels = channels;
                    // get channel need to be after the asyc call of get channels
                    this.channel = this.channelService.getChannel(this.channels);
                }
            );

    }
}

import { Component, OnInit } from "@angular/core";

import { Channel } from "./channel.model";
import { ChannelService } from "./channel.service";

@Component({
    selector: 'app-channel-list',
    templateUrl: './channel-list.component.html'
})
export class ChannelListComponent implements OnInit {
    channels: Channel[];

    constructor(private channelService: ChannelService) {}

    ngOnInit() {
        this.channelService.getChannels()
            .subscribe(
                (channels: Channel[]) => {
                    this.channels = channels;
                }
            );
    }
}

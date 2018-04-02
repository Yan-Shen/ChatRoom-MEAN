import { Component, OnInit } from "@angular/core";

import { Channel } from "../channel.model";
import { ChannelService } from "../channel.service";

@Component({
    selector: 'app-channel-sidebar',
    templateUrl: './channel-sidebar.component.html'
})
export class ChannelSidebarComponent implements OnInit {
    channels: Channel[];
    firstName: string;

    constructor(private channelService: ChannelService) {}

    ngOnInit() {
        this.channelService.getChannels()
            .subscribe(
                (channels: Channel[]) => {
                    this.channels = channels;
                    console.log('channels are -----', this.channels)
                }
            );

        this.firstName = localStorage.getItem('userFirstName');
    }
}

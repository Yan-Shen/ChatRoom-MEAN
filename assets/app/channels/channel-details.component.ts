import { Component } from "@angular/core";

@Component({
    selector: 'app-channel-details',
    template: `
        <div class="channelDetailsContainer">
        <app-channel-sidebar class="channelSidebarContainer"></app-channel-sidebar>
        <app-messages class="messagesContainer"></app-messages>
        </div>
    `
})
export class ChannelDetailsComponent {

}

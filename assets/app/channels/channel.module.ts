import { NgModule, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule,MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule  } from '@angular/material/form-field';


import { ChannelListComponent } from "./channel-list.component";
import { ChannelComponent } from "./channel.component";
import { ChannelInputComponent } from "./channel-input.component";
import { ChannelDetailsComponent } from "./channel-details.component";
import { ChannelSidebarComponent } from "./channel-sidebar/channel-sidebar.component"
import { SidebarUserComponent } from "./channel-sidebar/sidebar-user.component"
import {ChannelSidePanelComponent} from "./channel-sidepanel/channel-sidepanel.component"
import {ChannelHeaderComponent} from "./channel-header.component"
import { ChannelService } from "./channel.service";
import { channelRouting} from "./channel.routing";
import { MessagesComponent } from "./messages/messages.component"
// import { MessageListComponent } from "./messages/message-list.component";
// import { MessageComponent } from "./messages/message.component";
// import { MessageInputComponent } from "./messages/message-input.component";
// import { MessageService } from "./messages/message.service";

import {MessageModule} from "./messages/message.module"

@NgModule({
    declarations: [
        ChannelListComponent,
        ChannelComponent,
        ChannelInputComponent,
        ChannelDetailsComponent,
        ChannelSidebarComponent,
        MessagesComponent,
        // MessageListComponent,
        // MessageInputComponent,
        // MessageComponent,
        // HoverMenuComponent,
        // MessageHoverDirective,
        ChannelHeaderComponent,
        SidebarUserComponent,
        ChannelSidePanelComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        channelRouting,
        MatMenuModule,
        MatIconModule,
        MessageModule
    ],
    providers: [ChannelService]
})
export class ChannelModule {

}

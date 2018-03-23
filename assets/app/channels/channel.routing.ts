import { Routes, RouterModule } from "@angular/router";

import { ChannelInputComponent } from "./channel-input.component";
import { ChannelListComponent } from "./channel-list.component";
import { MessagesComponent } from "../messages/messages.component"

const CHANNEL_ROUTES: Routes = [
    { path: '', component: ChannelListComponent },
    { path: 'add', component: ChannelInputComponent },
    { path: ':channelId/messages', component: MessagesComponent},
];

export const channelRouting = RouterModule.forChild(CHANNEL_ROUTES);

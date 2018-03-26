import { Routes, RouterModule } from "@angular/router";

import { ChannelInputComponent } from "./channel-input.component";
import { ChannelListComponent } from "./channel-list.component";
import { ChannelDetailsComponent } from "./channel-details.component"

const CHANNEL_ROUTES: Routes = [
    { path: '', component: ChannelListComponent },
    { path: 'add', component: ChannelInputComponent },
    { path: 'messages', component: ChannelDetailsComponent},
];

export const channelRouting = RouterModule.forChild(CHANNEL_ROUTES);

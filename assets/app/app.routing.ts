import { Routes, RouterModule } from "@angular/router";

import {ChannelsComponent} from "./channels/channels.component"
import {AuthenticationComponent } from "./auth/authentication.component"
import {FrontpageComponent} from "./frontpage/frontpage.component"

const APP_ROUTES: Routes = [
    { path: '', component: FrontpageComponent },
    {path:'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'},
    // loadChildren: enable lazy loading.  only render components when it is needed
    { path: 'channels', component: ChannelsComponent, loadChildren: './channels/channel.module#ChannelModule'},

];

export const routing = RouterModule.forRoot(APP_ROUTES);

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { HeaderMenuComponent } from "./header/menu.component"
import {ChannelsComponent} from "./channels/channels.component";
import { ErrorComponent } from "./errors/error.component";

import { routing } from "./app.routing";
import { ErrorService } from "./errors/error.service";
import { AuthService } from "./auth/auth.service";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        HeaderMenuComponent,
        ErrorComponent,
        ChannelsComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        routing,
        HttpModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
    ],
    // this will make error service and authservice one instance available to all components in this module
    providers: [ErrorService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

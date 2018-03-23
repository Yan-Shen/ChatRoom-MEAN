import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
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
        ErrorComponent,
        ChannelsComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        routing,
        HttpModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
    ],
    providers: [ErrorService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

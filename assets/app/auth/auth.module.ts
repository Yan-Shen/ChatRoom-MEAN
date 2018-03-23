import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule,MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';

import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { authRouting } from "./auth.routing";
import { AuthService } from "./auth.service";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
    ],
    providers: [AuthService]
})
export class AuthModule {

}

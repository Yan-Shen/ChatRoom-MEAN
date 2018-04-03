import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule,MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { authRouting } from "./auth.routing";
import { AuthService } from "./auth.service";
import {FileUploadService} from "../file-upload/file-upload.service"

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        authRouting,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        HttpClientModule
    ],
    providers: [AuthService, FileUploadService]
})
export class AuthModule {

}

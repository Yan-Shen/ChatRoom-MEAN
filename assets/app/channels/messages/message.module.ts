import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule,MatInputModule } from '@angular/material';
import {MatFormFieldModule  } from '@angular/material/form-field';

// import { MessagesComponent } from "./messages.component";
import { MessageListComponent } from "./message-list.component";
import { MessageComponent } from "./message.component";
import { MessageInputComponent } from "./message-input.component";
import {HoverMenuComponent} from "./hover-menu/hover-menu.component"
import { MessageHoverDirective } from './message-hover.directive';
import { MessageService } from "./message.service";

@NgModule({
    declarations: [
        // MessagesComponent,
        MessageListComponent,
        MessageComponent,
        MessageInputComponent,
        HoverMenuComponent,
        MessageHoverDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ],
    // to Rendering a feature module’s component template
    exports: [
      MessageListComponent,
      MessageComponent,
      MessageInputComponent,
      // HoverMenuComponent,
      // MessageHoverDirective
    ],
    providers: [MessageService]
})
export class MessageModule {

}

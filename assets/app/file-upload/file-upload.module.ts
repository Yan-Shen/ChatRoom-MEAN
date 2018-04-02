import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
// import {MatButtonModule, MatCardModule,MatInputModule } from '@angular/material';
// import {MatFormFieldModule  } from '@angular/material/form-field';

import { FileUploadComponent  } from "./file-upload.component";
// import { MessageService } from "./message.service";

@NgModule({
    declarations: [
        // MessagesComponent,
        FileUploadComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    // to Rendering a feature module’s component template
    exports: [
      FileUploadComponent
      // HoverMenuComponent,
      // MessageHoverDirective
    ],
    // providers: [MessageService]
})
export class FileUploadModule {

}

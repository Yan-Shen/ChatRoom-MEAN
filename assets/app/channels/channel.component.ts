import { Component, Input } from "@angular/core";

import { Channel } from "./channel.model";
// import { MessageService } from "./message.service";

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class ChannelComponent {
    @Input() channel: Channel;

    // constructor(private messageService: MessageService) {}

    // onEdit() {
    //     this.messageService.editMessage(this.message);
    // }

    // onDelete() {
    //     this.messageService.deleteMessage(this.message)
    //         .subscribe(
    //             result => console.log(result)
    //         );
    // }

    // belongsToUser() {
    //     return localStorage.getItem('userId') == this.message.userId;
    // }
}

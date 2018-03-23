import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ChannelService } from "./channel.service";
import { Channel} from "./channel.model";

@Component({
    selector: 'app-channel-input',
    templateUrl: './channel-input.component.html'
})
export class ChannelInputComponent implements OnInit {
    message: Channel;

    constructor(private channelService: ChannelService) {}

    onSubmit(form: NgForm) {
        // Create
        const channel= new Channel(form.value.name, form.value.imgUrl);
        this.channelService.addChannel(channel)
        .subscribe(
            data => console.log(data),
            // error => console.error(error)
        );
        form.resetForm();
    }

    // onClear(form: NgForm) {
    //     this.message = null;
    //     form.resetForm();
    // }

    ngOnInit() {
    //     this.messageService.messageIsEdit.subscribe(
    //         (message: Message) => this.message = message
    //     );
    }

}

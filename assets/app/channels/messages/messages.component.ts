import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
            <app-channel-header></app-channel-header>
            <div class="messagesBodyContainer">
                <div class="messagesWrap">
                    <app-message-list></app-message-list>
                    <app-message-input class="inputContainer"></app-message-input>
                </div>
                <app-channel-sidepanel class="sidePanelContainer"></app-channel-sidepanel>
            </div>

    `
})
export class MessagesComponent {

}

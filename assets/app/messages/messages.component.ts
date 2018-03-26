import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `

            <app-message-list></app-message-list>
            <app-message-input class="inputContainer"></app-message-input>

    `
})
export class MessagesComponent {

}

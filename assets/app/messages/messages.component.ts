import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
            <app-message-list></app-message-list>
            <app-message-input></app-message-input>
    `
})
export class MessagesComponent {

}

import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ActivatedRoute, Params } from '@angular/router';

import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    private channelId: string;
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private activatedRoute: ActivatedRoute, private errorService: ErrorService ) {
        this.activatedRoute.queryParams.subscribe(params => { this.channelId = params['channelId']; });
    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const channelId = 'channelId=' +this.channelId
        return this.http.post('http://localhost:3000/message/' + token +'&' + channelId, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getMessages() {
        // const channelId = 'channelId=' +this.channelId
        console.log('channelId -----', this.channelId)
        return this.http.get('http://localhost:3000/message/', {params: {channelId: this.channelId}})
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id,
                        message.channel._id,
                    )
                    );
                }
                this.messages = transformedMessages;
                console.log('transformMessegaes are------', transformedMessages)
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        console.log('message deleted-----', message)
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}

// constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParams.subscribe(params => {
    //       let date = params['startdate'];
    //       console.log(date); // Print the parameter to the console.
    //   });
//   }

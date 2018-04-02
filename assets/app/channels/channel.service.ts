import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ActivatedRoute, Params } from '@angular/router';

import { Channel } from "./channel.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ChannelService {
    private channels: Channel[] = [];
    private channel: Channel;
    private channelId: string;

    constructor(private http: Http, private activatedRoute: ActivatedRoute, private errorService: ErrorService ) {
        this.activatedRoute.queryParams.subscribe(params => { this.channelId = params['channelId']; });
    }


    addChannel(channel: Channel) {
        const body = JSON.stringify(channel);
        const headers = new Headers({'Content-Type': 'application/json'});
        // const token = localStorage.getItem('token')
        //     ? '?token=' + localStorage.getItem('token')
        //     : '';
        return this.http.post('http://localhost:3000/channel' , body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const channel = new Channel(
                    result.obj.name,
                    result.obj.imgUrl);
                this.channels.push(channel);
                return channel;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getChannels() {
        return this.http.get('http://localhost:3000/channel/')
            .map((response: Response) => {
                const channels = response.json().obj;
                let transformedChannels: Channel[] = [];
                for (let channel of channels) {
                    transformedChannels.push(new Channel(
                        channel.name,
                        channel.imgUrl,
                        channel._id)
                    );
                }
                this.channels = transformedChannels;
                return transformedChannels;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getChannel(channels: Channel[]){

        this.channel =  channels.find(channel=> channel.channelId===this.channelId)
        return this.channel
    }
    // editMessage(message: Message) {
    //     this.messageIsEdit.emit(message);
    // }

    // updateMessage(message: Message) {
    //     const body = JSON.stringify(message);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

    // deleteMessage(message: Message) {
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

}

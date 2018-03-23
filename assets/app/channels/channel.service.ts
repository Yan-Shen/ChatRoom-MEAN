import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Channel } from "./channel.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ChannelService {
    private channels: Channel[] = [];
    // messageIsEdit = new EventEmitter<Channel>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addChannel(channel: Channel) {
        const body = JSON.stringify(channel);
        const headers = new Headers({'Content-Type': 'application/json'});
        // const token = localStorage.getItem('token')
        //     ? '?token=' + localStorage.getItem('token')
        //     : '';
        console.log('body is--------', body)
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

    // getChannels(){
    //   var tempChannel1= new Channel('front end Channel1', 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg')
    //   var tempChannel2= new Channel('front end Channel2', 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782')
    //   console.log('tempChannel1---', tempChannel1)
    //   this.channels.push(tempChannel1)
    //   this.channels.push(tempChannel2)
    //   return this.channels
    // }
}

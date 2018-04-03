import { Http, Response, Headers } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ActivatedRoute, Params } from '@angular/router';
import { ErrorService } from '../errors/error.service'

@Injectable()
export class FileUploadService {
    private channelId: string;

    constructor(private http: Http,
      private httpClient: HttpClient,
      private errorService: ErrorService ) {

    }


    postFile(fileToUpload: File): Observable<string> {
      const endpoint = 'http://localhost:3000/user/profile';
      const formData: FormData = new FormData();
      formData.append('image', fileToUpload, 'Guinness.jpeg');
      console.log('formdata------', formData.get('image'));
      return this.httpClient
        .post(endpoint, formData)
        .map((response: Response) => { return response})
        .catch((error: Response) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
  }


}

// addChannel(channel: Channel) {
//   const body = JSON.stringify(channel);
//   const headers = new Headers({'Content-Type': 'application/json'});
//   return this.http.post('http://localhost:3000/channel' , body, {headers: headers})
//       .map((response: Response) => {
//           const result = response.json();
//           const channel = new Channel(
//               result.obj.name,
//               result.obj.imgUrl);
//           this.channels.push(channel);
//           return channel;
//       })
//       .catch((error: Response) => {
//           this.errorService.handleError(error.json());
//           return Observable.throw(error.json());
//       });
// }

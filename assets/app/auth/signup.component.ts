import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import {FileUploadService} from "../file-upload/file-upload.service"
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;
    fileToUpload: File = null;

    // use constructor for dependency injection
    constructor(private authService: AuthService,
    private router: Router,
    private fileUploadService: FileUploadService) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var input = document.getElementById('image');
    var preview = document.getElementById('profilePreview');
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }
    var curFile = this.fileToUpload;
    if(curFile) {
          var iSrc = window.URL.createObjectURL(curFile);
          preview.style.backgroundImage = `url(${iSrc})`;
    }
    console.log('filetoupload----', this.fileToUpload)
  }

    uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(
        data => {console.log('data from profile post----', data)},
        error => {console.log(error)});
    }

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        console.log('myform------', this.myForm.value)
        this.authService.signup(user)
            .subscribe(
                data => {
                    console.log('data from signup---', data);
                    // this.fileUploadService.postFile(this.fileToUpload)
                    // .subscribe(
                    //     data=>{console.log('data from profile post----', data)},
                    //     error=> console.error(error)
                    // )
                    this.router.navigateByUrl('/auth/signin');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            image: new FormControl(null),
        });

        console.log('my form initially-----', this.myForm)
    }
}

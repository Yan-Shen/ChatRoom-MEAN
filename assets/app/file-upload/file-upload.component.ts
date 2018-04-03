// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { FileUploadService } from './file-upload.service'


// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html'
// })

// export class FileUploadComponent implements OnInit {
//   fileToUpload: File = null;

//   constructor(private fileUploadService: FileUploadService) { }

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
//     var input = document.getElementById('image_uploads');
//     var preview = document.getElementById('profilePreview');
//     while(preview.firstChild) {
//         preview.removeChild(preview.firstChild);
//       }
//     var curFile = this.fileToUpload;
//     if(curFile) {
//           var iSrc = window.URL.createObjectURL(curFile);
//           preview.style.backgroundImage = `url(${iSrc})`;
//     }
//   }

// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
// }
//   ngOnInit() {

//   }
// }

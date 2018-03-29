import { Component, OnInit} from "@angular/core";
import { AuthService } from "../auth/auth.service"
import { Router } from "@angular/router";
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-header-menu-frontpage',
    templateUrl: './menu-frontpage.component.html'
})

export class HeaderMenuFrontpageComponent {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }
    constructor(private authService: AuthService, private router: Router){}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

    // onTextSelection(event: any): void{
    //   if(window.getSelection && window.getSelection().toString()){
    //   var menu = document.getElementById('cdk-overlay-0');
    //   menu.style.position = 'absolute';
    //   menu.style.right = '0px';
    //   menu.style.top = '60px';
    // }
// }
}
// (event: any):void{
//   if(window.getSelection && window.getSelection().toString()){
//     var menu = document.getElementById('menuBtn');
//     menu.style.display = '';
//     menu.style.position = 'absolute';
//     menu.style.left = event.pageX + 5 + 'px';
//     menu.style.top = event.pageY + 5 + 'px';

//     this.menuTrigger.openMenu();
//   }

// }

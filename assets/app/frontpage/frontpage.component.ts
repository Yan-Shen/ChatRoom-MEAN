import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service"
import { Router } from "@angular/router";

@Component({
    selector: 'app-frontpage',
    templateUrl: './frontpage.component.html'
})

export class FrontpageComponent {
    // constructor(private authService: AuthService, private router: Router){}

    // isLoggedIn() {
    //     return this.authService.isLoggedIn();
    // }

    // onLogout() {
    //     this.authService.logout();
    //     this.router.navigate(['/auth', 'signin']);
    // }
}

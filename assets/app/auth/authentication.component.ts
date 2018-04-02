import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `
    <app-header></app-header>
    <div class="authenticationContainer">
        <div id="overlay-back"></div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}


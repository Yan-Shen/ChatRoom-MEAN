import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../../auth/auth.service"
import { Router } from "@angular/router";
// import { Channel } from "../channel.model";
// import { ChannelService } from "../channel.service";

@Component({
    selector: 'app-sidebar-user',
    templateUrl: './sidebar-user.component.html'
})
export class SidebarUserComponent {
  @Input() userFirst: string;

  constructor(private authService: AuthService, private router: Router){}

  isLoggedIn() {
      return this.authService.isLoggedIn();
  }

  onLogout() {
      this.authService.logout();
      this.router.navigate(['/auth', 'signin']);
  }
}

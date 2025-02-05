import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    });
  }

  logout() {
    this.msalService.logoutPopup();
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }
}

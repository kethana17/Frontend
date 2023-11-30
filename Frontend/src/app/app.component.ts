import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLoginForm: boolean = false;
 

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  showRegisterForm: boolean = false;

  toggleRegistrationForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }


  
}

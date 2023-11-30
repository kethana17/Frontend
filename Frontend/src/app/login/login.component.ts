import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:string = '';

  constructor(private  route:ActivatedRoute){

      this.route.params.subscribe( data => { this.user = data['username']});

  }

}

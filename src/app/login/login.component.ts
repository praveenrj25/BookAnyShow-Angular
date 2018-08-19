import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginFailed = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    const target = event.target;
    const formdata: FormData = new FormData();
    formdata.append('username', target.querySelector('#username').value);
    formdata.append('password', target.querySelector('#password').value);
    this.auth.getUserDetails(formdata).subscribe(
      data => {
        this.auth.setLoggedIn(true);
        localStorage.setItem('identity', data.name);
        $('#myModal').modal('hide');
        if (data.name === 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['user']);
        }
      },
      error => {
        this.isLoginFailed = true;
      }
    );
  }

}

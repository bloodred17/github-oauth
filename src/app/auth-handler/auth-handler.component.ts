import { Component, OnInit } from '@angular/core';
import { AuthHandlerService } from './auth-handler.service';
@Component({
  selector: 'app-auth-handler',
  templateUrl: './auth-handler.component.html',
  styleUrls: ['./auth-handler.component.scss']
})
export class AuthHandlerComponent implements OnInit {

  constructor(private authHandler: AuthHandlerService) { }

  ngOnInit(): void {
  }

  auth() {
    this.authHandler.auth();
  }

}

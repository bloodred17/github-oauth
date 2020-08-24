import { Component } from '@angular/core';
import { AuthHandlerService } from './auth-handler/auth-handler.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'git-oauth';

  constructor(private authHandler: AuthHandlerService) { }

  ngOnInit(): void {
  }

  auth() {
    this.authHandler.auth();
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigacijaComponent } from "./navigacija/navigacija.component";
import { FooterComponent } from "./footer/footer.component";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigacijaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'animal-hotel';
  userService = inject(UserService);

  ngOnInit(): void {
    this.setFakeUser();
  }

  setFakeUser() {
    this.userService.postUser().subscribe();
  }
}

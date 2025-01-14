import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/offcanves-header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from "./pages/home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        HomeComponent
    ]
})
export class AppComponent {
  title = 'my-portfolio';
}

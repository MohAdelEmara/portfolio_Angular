import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { MainComponent } from "../../main/main.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      HeaderComponent,
      MainComponent,
      FooterComponent
    ]
})
export class HomeComponent {

}

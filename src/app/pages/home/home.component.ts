import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/offcanves-header/header.component";
import { MainComponent } from "../../components/main/main.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NormalHeaderComponent } from "../../components/normal-header/normal-header.component";

import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeaderComponent,
        MainComponent,
        FooterComponent,
        NormalHeaderComponent,
        CommonModule
    ]
})
export class HomeComponent {
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }
}


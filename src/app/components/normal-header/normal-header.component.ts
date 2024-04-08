import { Component, OnInit } from '@angular/core';
import { HeaderControlService } from '../../services/header-control.service';

@Component({
  selector: 'app-normal-header',
  standalone: true,
  imports: [],
  templateUrl: './normal-header.component.html',
  styleUrl: './normal-header.component.css'
})
export class NormalHeaderComponent implements OnInit {
  windowWidth!: number;

  constructor(private headerControlService: HeaderControlService) { }

  ngOnInit(): void {
    this.windowWidth = this.headerControlService.getWindowWidth();
    this.headerControlService.windowWidth$.subscribe(width => {
      this.windowWidth = width;
    });
  }
}

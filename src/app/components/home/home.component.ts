import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  panels = [
    { isActive: true, image: 'assets/images/main-1.jpg' },
    { isActive: false, image: 'assets/images/main-2.jpg' },
    { isActive: false, image: 'assets/images/main-3.jpg' },
    // Add more panels as needed
  ];

  activatePanel(clickedPanel: any) {
    this.panels.forEach((panel) => {
      panel.isActive = false;
    });
    clickedPanel.isActive = true;
  }
}

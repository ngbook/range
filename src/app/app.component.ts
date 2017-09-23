import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    max = 10;
    constructor() {
        setTimeout(() => {
            this.max = 20;
        }, 1000);
    }
}

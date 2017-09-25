import {
    Component, ViewContainerRef,
    OnInit, Injector,
    ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    min = 1;
    max = 10;
    constructor() {
        setTimeout(() => {
            this.min = 3;
            this.max = 16;
        }, 2000);
    }

    ngOnInit() {
    }
}

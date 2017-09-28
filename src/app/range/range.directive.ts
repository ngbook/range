import {
  Directive, Input, ViewContainerRef,
  DoCheck, AfterViewInit, TemplateRef
} from '@angular/core';

/* tslint:disable */
@Directive({
  selector: '[range][rangeFrom][rangeTo]'
})
export class RangeDirective implements AfterViewInit {
    @Input('rangeFrom')
    start: number;
    @Input('rangeTo')
    end: number;

    constructor(
        private viewcontainer: ViewContainerRef,
        private templateRef: TemplateRef<RangeContext>) { }

    ngAfterViewInit() {
        for (let i = this.start; i < this.end; i ++) {
            let view = this.viewcontainer.createEmbeddedView(this.templateRef, new RangeContext(i));
            view.detectChanges();
        }
    }
}

export class RangeContext {
    constructor(public $implicit: number) {}
}

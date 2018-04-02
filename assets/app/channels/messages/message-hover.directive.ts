import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[ccMessageHover]'
})
export class MessageHoverDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
}

@HostListener('mouseover', ['$event']) onMouseOver() {
// e.stopPropagation();
let part = this.el.nativeElement.querySelector('.hoverMenuContainer');
this.renderer.setElementStyle(part, 'display', 'flex');
// this.ishovering = true;
}

@HostListener('mouseout', ['$event']) onMouseOut() {
// e.stopPropagation();
let part = this.el.nativeElement.querySelector('.hoverMenuContainer');
this.renderer.setElementStyle(part, 'display', 'flex');
// this.ishovering = false;
}
}

// @HostListener('click', ['$event'])
// onClick(e) {
//  alert("we have performed click");
//  e.stopPropagation();
// }

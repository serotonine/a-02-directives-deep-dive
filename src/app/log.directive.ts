import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)':'onLog()'
  }
})
export class LogDirective {
  private _elementRef = inject(ElementRef);

  constructor() { }
  onLog(){
    console.log('LOG DIRECTIVE CLICK')
    console.log(this._elementRef.nativeElement);
  }

}

import { Directive } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host:{
    '(click)':'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {
  constructor(){ }
  onConfirmLeavePage(event:MouseEvent){
    const isLeaving = window.confirm('Do you want to leave the application?');
    if(isLeaving){
      return;
    }
   event.preventDefault();

  }
}

import { Directive, ElementRef, input, inject } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    "(click)": "onConfirmLeavePage($event)",
  },
})
export class SafeLinkDirective {
  constructor() {}
  queryParam = input("myApp", {alias:'appSafeLink'});
  private _hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmLeavePage(event: MouseEvent) {
    const isLeaving = window.confirm("Do you want to leave the application?");
    if (isLeaving) {
      // TypeScript syntax.
     // const address = (event.target as HTMLAnchorElement).href;
     const address =  this._hostElementRef.nativeElement.href
     // (event.target as HTMLAnchorElement).href = address + "?from=" + this.queryParam;
     this._hostElementRef.nativeElement.href = address + "?from=" + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}

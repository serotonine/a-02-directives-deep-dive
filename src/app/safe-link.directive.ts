import { Directive, input } from "@angular/core";

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
  onConfirmLeavePage(event: MouseEvent) {
    const isLeaving = window.confirm("Do you want to leave the application?");
    if (isLeaving) {
      // TypeScript syntax.
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + "?from=" + this.queryParam;
      return;
    }
    event.preventDefault();
  }
}

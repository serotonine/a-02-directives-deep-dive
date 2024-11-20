import { Directive, input, inject, effect } from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";

@Directive({
  selector: "[appAuth]",
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({alias:'appAuth' });
  private _authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this._authService.activePermission() === this.userType()) {
        console.log("SHOW ELEMENT");
      }
      else{
        console.log("DO NOT SHOW ELEMENT");
      }
    });
  }
}

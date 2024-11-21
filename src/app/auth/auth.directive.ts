import {
  Directive,
  input,
  inject,
  effect,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Permission } from "./auth.model";
import { AuthService } from "./auth.service";

@Directive({
  selector: "[appAuth]",
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: "appAuth" });
  private _authService = inject(AuthService);
  private _templateRef = inject(TemplateRef);
  private _viewContainerRef = inject(ViewContainerRef);
  constructor() {
    effect(() => {
      if (this._authService.activePermission() === this.userType()) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainerRef.clear();
      }
    });
  }
}

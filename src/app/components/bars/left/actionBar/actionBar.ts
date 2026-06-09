import {Component, inject, input} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ActionButtonsService} from "./actionButtonsService";

@Component({
    selector: 'action-bar',
    template: `<div class="action-bar">
    @for (button of actionButtons?.buttons(); track button.label)
    {
        <button class="action-button" (click)="button.action?.()">
         <ng-icon [svg]="button.active?.() ? button.active_icon : button.icon" ></ng-icon>
        </button>
    }
  </div>`,
    styleUrl: 'actionBar.scss',
    imports: [NgIcon]
})
export class actionBar {
  actionButtons = inject(ActionButtonsService, {
    optional: true,
  });
}

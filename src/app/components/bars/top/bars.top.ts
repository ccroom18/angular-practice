import { Component } from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'top-bar',
    template: `
    <div class="main">
      @for (button of buttons; track button.path) {
        <button
          [routerLink]="button.path"
          class="app-button">{{ button.label }}
        </button>
      }
    </div>
  `,
    imports: [
        RouterLink
    ],
    styleUrl: './bars.top.scss'
})
export class TopBar {
  buttons = [
    { label: 'SETUP', path: '/setup' },
    { label: 'INSPECTION', path: '/inspection' },
    { label: 'ANALYSIS', path: '/analysis' },
  ];
}

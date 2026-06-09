import {Component} from '@angular/core';
import {mainLayout} from "../components/mainLayout/mainLayout";
import {ActionButtonsService} from "../components/bars/left/actionBar/actionButtonsService";
import {matArrowForwardIos, matHome} from "@ng-icons/material-icons/baseline";

@Component({
    selector: 'app-root',
    imports: [
        mainLayout
    ],
    template: `
    <main-layout></main-layout>`,
    styleUrl: '../components/mainLayout/mainLayout.scss',
    providers: [ActionButtonsService]
})
export class Inspection {
  constructor(private actionButtons: ActionButtonsService) {

  }

  ngOnInit() {
    this.actionButtons.setButtons([
        {
          label: 'HOME',
          icon: matHome
        },
        {
          label: 'PANEL',
          icon: matArrowForwardIos
        }
      ]
    )
  }

}

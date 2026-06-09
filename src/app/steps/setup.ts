import {Component, effect, viewChild} from '@angular/core';
import {mainLayout} from "../components/mainLayout/mainLayout";
import {ActionButtonsService} from "../components/bars/left/actionBar/actionButtonsService";
import {matArrowBackIos, matArrowForwardIos, matPlayArrow} from "@ng-icons/material-icons/baseline";

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
export class Setup {
  layout = viewChild.required(mainLayout);

  constructor(private actionButtons: ActionButtonsService) {
  }

  ngAfterViewInit() {

    this.actionButtons.setButtons([
        {
          label: 'HOME',
          icon: matPlayArrow,
        },
        {
          label: 'PANEL',
          active_icon: matArrowForwardIos,
          icon: matArrowBackIos,
          action: () => this.layout().toggleLeftPanel(),
          active: this.layout().leftPanelCollapsed
        }
      ]
    )
  }
}

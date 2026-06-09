import {Component, signal} from '@angular/core';
import {LeftBar} from "../bars/left/leftBar";
import {TopBar} from "../bars/top/bars.top";
import {LeftPanel} from "../panels/left/leftPanel";
import {ViewPanel} from "../../viewPanel/viewPanel";

@Component({
    selector: 'main-layout',
    templateUrl: 'mainLayout.html',
    imports: [
        LeftBar,
        TopBar,
        LeftPanel,
        ViewPanel
    ],
    styleUrl: 'mainLayout.scss'
})
export class mainLayout {
  leftPanelCollapsed = signal(true);
  toggleLeftPanel() {
    this.leftPanelCollapsed.update(v => !v);
  }
}

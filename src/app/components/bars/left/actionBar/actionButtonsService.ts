import {Injectable, Signal, signal} from '@angular/core'

export interface ActionButton {
  label?: string;
  icon?: string;
  active_icon?: string;
  action?: () => void;
  active?: Signal<boolean>;
}

@Injectable()
export class ActionButtonsService {
  buttons = signal<ActionButton[]>([]);

  setButtons(buttons: ActionButton[]) {
    this.buttons.set(buttons)
  }
}

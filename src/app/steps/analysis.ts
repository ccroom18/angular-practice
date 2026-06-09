import { Component } from '@angular/core';
import {mainLayout} from "../components/mainLayout/mainLayout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    mainLayout
  ],
  template: `<main-layout></main-layout>`,
  styleUrl: '../components/mainLayout/mainLayout.scss'
})
export class Analysis {

}

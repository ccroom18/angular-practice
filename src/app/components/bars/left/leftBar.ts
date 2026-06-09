import { Component} from "@angular/core";
import {actionBar} from "./actionBar/actionBar";

@Component({
  selector: 'left-bar',
  standalone: true,
  templateUrl: './leftBar.html',
  imports: [
    actionBar
  ],
  styleUrl: './leftBar.scss'
})
export class LeftBar {
  logoTitle = 'egg';

}

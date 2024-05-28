import { Component } from '@angular/core';
import {TerminalComponent} from '../terminal/terminal.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [TerminalComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {

}

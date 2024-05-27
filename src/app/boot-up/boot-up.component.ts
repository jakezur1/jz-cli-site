import { Component } from '@angular/core';
import {BootUpProgressBarComponent} from '../boot-up-progress-bar/boot-up-progress-bar.component';

@Component({
  selector: 'app-boot-up',
  standalone: true,
  imports: [BootUpProgressBarComponent],
  templateUrl: './boot-up.component.html',
  styleUrl: './boot-up.component.css'
})
export class BootUpComponent {

}

import {Component, Input} from '@angular/core';
import {Project} from '../projects';

@Component({
  selector: 'app-jz-ep',
  standalone: true,
  imports: [],
  templateUrl: './jz-ep.component.html',
  styleUrl: './jz-ep.component.css'
})
export class JzEpComponent {
  @Input() data: any = {}
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jz-h',
  standalone: true,
  imports: [],
  templateUrl: './jz-h.component.html',
  styleUrl: './jz-h.component.css'
})
export class JzHComponent {
  @Input() data: any = {}
}

// TODO: change description of commands to their own div so it is right aligned

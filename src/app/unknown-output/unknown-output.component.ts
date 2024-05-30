import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-unknown-output',
  standalone: true,
  imports: [],
  templateUrl: './unknown-output.component.html',
  styleUrl: './unknown-output.component.css'
})
export class UnknownOutputComponent {
  @Input() data: object = {}
}

import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';


export interface CommandHistoryEntry {
  command: string;
  output: string;
}

@Component({
  selector: 'app-command-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './command-history.component.html',
  styleUrl: './command-history.component.css'
})
export class CommandHistoryComponent {
  @Input() history: CommandHistoryEntry[] = [];
}

import {
  AfterViewInit,
  Component,
  Input,
  OnChanges, QueryList,
  SimpleChanges,
  ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JzHComponent} from '../jz-h/jz-h.component';


export enum CommandType {
  UNKNOWN = 'unknown',
  JZ_H = 'jz-h',
  JZ_LP = 'jz-lp',
  JZ_EP = 'jz-ep'
}

export interface CommandHistoryEntry {
  type: CommandType
  command: string;
  data: any
}

@Component({
  selector: 'app-command-history',
  standalone: true,
  imports: [CommonModule, JzHComponent],
  templateUrl: './command-history.component.html',
  styleUrl: './command-history.component.css'
})
export class CommandHistoryComponent implements OnChanges, AfterViewInit {
  @Input() history: CommandHistoryEntry[] = [];
  @ViewChildren('outputContainers', { read: ViewContainerRef }) outputContainers!: QueryList<ViewContainerRef>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['history']) {
      this.loadComponents();
    }
  }

  ngAfterViewInit() {
    this.loadComponents();
  }

  loadComponents() {
    if (!this.history || this.history.length === 0) {
      return;
    }
    this.outputContainers.forEach((container, index) => {
      const entry = this.history[index];
      let componentRef;
      container.clear();
      switch (entry.type) {
        case CommandType.JZ_LP:
          componentRef = container.createComponent(JzHComponent);
          break;
        case CommandType.JZ_EP:
          componentRef = container.createComponent(JzHComponent);
          break;
        case CommandType.JZ_H:
          componentRef = container.createComponent(JzHComponent);
          break;
        default:
          componentRef = container.createComponent(JzHComponent);
      }
      componentRef.instance.data = entry.data;
    });
  }
}

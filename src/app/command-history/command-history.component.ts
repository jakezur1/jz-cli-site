import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges, QueryList,
  SimpleChanges,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JzHComponent} from '../jz-h/jz-h.component';
import {JzLpComponent} from '../jz-lp/jz-lp.component';
import {JzEpComponent} from '../jz-ep/jz-ep.component';
import {UnknownOutputComponent} from '../unknown-output/unknown-output.component';


export enum CommandType {
  UNKNOWN = 'unknown',
  JZ_H = 'jz-h',
  JZ_LP = 'jz-lp',
  JZ_EP = 'jz-ep'
}

export interface CommandHistoryEntry {
  type: CommandType
  command: string;
  output: any
}

@Component({
  selector: 'app-command-history',
  standalone: true,
  imports: [CommonModule, JzHComponent, JzLpComponent, JzEpComponent, JzEpComponent, UnknownOutputComponent],
  templateUrl: './command-history.component.html',
  styleUrl: './command-history.component.css'
})
export class CommandHistoryComponent implements OnChanges, AfterViewInit, AfterViewChecked{
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

  ngAfterViewChecked() {
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
          componentRef = container.createComponent(JzLpComponent);
          break;
        case CommandType.JZ_EP:
          componentRef = container.createComponent(JzEpComponent);
          break;
        case CommandType.JZ_H:
          componentRef = container.createComponent(JzHComponent);
          break;
        case CommandType.UNKNOWN:
          componentRef = container.createComponent(UnknownOutputComponent)
          break;
        default:
          componentRef = container.createComponent(JzHComponent);
      }
      componentRef.instance.data = entry.output;
    });
  }
}

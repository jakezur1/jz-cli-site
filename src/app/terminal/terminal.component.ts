import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommandHistoryComponent, CommandHistoryEntry, CommandType} from '../command-history/command-history.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {JzHComponent} from '../jz-h/jz-h.component';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule, CommandHistoryComponent, CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements AfterViewInit {
  command: string = '';
  history: CommandHistoryEntry[] = [];

  @ViewChild('terminal') terminal!: ElementRef;
  @ViewChild('commandInput') commandInput!: ElementRef;

  ngAfterViewInit() {
    this.setFocus();

    this.commandInput.nativeElement.addEventListener('blur', this.setFocus.bind(this));

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.setFocus();
      }
    });
  }

  setFocus(): void {
    if (this.commandInput && this.commandInput.nativeElement) {
      this.commandInput.nativeElement.focus();
    }
  }

  onSubmit(): void {
    let output: any = {};
    let trimmedCommand = this.command.trim()
    console.log(trimmedCommand)
    let type: CommandType = CommandType.UNKNOWN;
    switch (trimmedCommand) {
      case 'jz -lp':
        output.data = 'Output for jz lp';
        type = CommandType.JZ_LP
        break;
      case 'jz -ep':
        output.data = 'Output for jz ep';
        type = CommandType.JZ_EP
        break;
      case 'jz -h':
        output.data = 'Output for jz -h';
        console.log('hit correct case')
        type = CommandType.JZ_H
        break;
      case 'jz':
        output.data = 'Output for jz -h';
        type = CommandType.JZ_H
        break
      default:
        output.data = 'Unknown command';
        break;
    }

    this.history = [...this.history, { type: type, command: this.command, data: output }];
    this.command = '';
    this.scrollToBottom();
    this.autoResize();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
    }, 0);
  }

  autoResize(event?: Event): void {
    const textarea = event ? event.target as HTMLTextAreaElement : null;
    if (textarea && textarea.textContent != '') {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommandHistoryComponent, CommandHistoryEntry} from '../command-history/command-history.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

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
    let output = '';

    switch (this.command) {
      case 'jz -lp':
        output = 'Output for jz -lp';
        break;
      case 'jz -ep':
        output = 'Output for jz -ep';
        break;
      case 'jz -h':
        output = 'Output for jz -h';
        break;
      default:
        output = 'Unknown command';
        break;
    }

    this.history.push({command: this.command, output: output});
    this.command = '';
    console.log(this.history)
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
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
}

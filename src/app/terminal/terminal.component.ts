import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CommandHistoryComponent, CommandHistoryEntry, CommandType} from '../command-history/command-history.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {projects} from '../projects';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule, CommandHistoryComponent, CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements OnInit, AfterViewInit {
  command: string = '';
  history: CommandHistoryEntry[] = []
  historyIdx: number = this.history.length;

  @ViewChild('terminal') terminal!: ElementRef;
  @ViewChild('commandInput') commandInput!: ElementRef;
  @ViewChild('lastLogin') lastLogin!: ElementRef;

  formattedDate: string = ''
  formattedTime: string = ''

  ngOnInit(): void {
    this.historyIdx = this.history.length;
    console.log(this.historyIdx)

    const now = new Date();

    // Format the date in words
    this.formattedDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(now);

    // Format the time in hh:mm:ss AM/PM
    this.formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  ngAfterViewInit() {
    this.setFocus();

    this.commandInput.nativeElement.addEventListener('blur', this.setFocus.bind(this));

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.setFocus();
      }
    });
    this.simulateTyping(`Last login: ${this.formattedDate} ${this.formattedTime}`, this.lastLogin.nativeElement);
    setTimeout(() => {
      this.simulateTyping('jz -h', this.commandInput.nativeElement);
    }, 2000)
    this.historyIdx = 1;
    console.log(this.historyIdx)
  }

  simulateTyping(text: string, ref: any): void {
    ref.value = '';
    let index = 0;

    const typeChar = () => {
      if (index < text.length) {
        ref.value += text[index];
        ref.dispatchEvent(new Event('input'));
        index++;
        setTimeout(typeChar, 30);
      } else {
        const event = new KeyboardEvent('keydown', {
          bubbles: true,
          cancelable: true,
          key: 'Enter',
          code: 'Enter',
        });
        ref.dispatchEvent(event);
      }
    };

    typeChar();
  }

  setFocus(): void {
    if (this.commandInput && this.commandInput.nativeElement) {
      this.commandInput.nativeElement.focus();
    }
  }

  handleUpArrowPress(event: KeyboardEvent): void {
    console.log('hello')
    console.log(this.historyIdx)
    if (this.historyIdx > 0) {
      console.log('hit')
      this.historyIdx--;
      console.log(this.historyIdx)
      this.commandInput.nativeElement.value = this.history[this.historyIdx].command;
      console.log(this.history[this.historyIdx].command)
      this.command = this.history[this.historyIdx].command;
    }
  }

  handleDownArrowPress(event: KeyboardEvent): void {
    if (this.historyIdx < this.history.length - 1) {
      this.historyIdx++;
      this.commandInput.nativeElement.value = this.history[this.historyIdx].command;
      this.command = this.history[this.historyIdx].command;
    } else {
      this.historyIdx = this.history.length;
      this.commandInput.nativeElement.value = '';
      this.command = ''
    }
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      this.handleUpArrowPress(event);
    }
    if (event.key === 'ArrowDown') {
      this.handleDownArrowPress(event);
    }
  }

  onSubmit(): void {
    let output: any = {};
    let trimmedCommand = this.command.trim()
    let splitCommand = trimmedCommand.split(/\s+/)
    let type: CommandType = CommandType.UNKNOWN;
    if (trimmedCommand === 'jz lp') {
      output.data = 'Output for jz lp';
      type = CommandType.JZ_LP
    } else if (JSON.stringify(splitCommand.slice(0, -1)) === JSON.stringify(['jz', 'ep'])) {
      const projectName = splitCommand[splitCommand.length - 1];
      console.log(projectName)
      output = projects.get(projectName);
      console.log(output)
      type = CommandType.JZ_EP
    } else if (trimmedCommand === 'jz -h' || trimmedCommand === 'jz') {
      output.data = 'Output for jz -h'
      type = CommandType.JZ_H
    } else {
      output.data = 'Unknown command';
      type = CommandType.UNKNOWN
    }
    if (trimmedCommand == 'clear') {
      this.history = []
    } else {
      this.history = [...this.history, {type: type, command: this.command, output: output}];
    }
    this.command = '';
    this.historyIdx = this.history.length;
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

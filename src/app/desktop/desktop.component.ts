import {Component, OnInit} from '@angular/core';
import {TerminalComponent} from '../terminal/terminal.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [TerminalComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {
  formattedTime: string = ''
  formattedDate: string = ''

  iconUrls: string[] = [
    '../../assets/firefox-icon.png',
    '../../assets/thunderbird-icon.png',
    '../../assets/folder-icon.png',
    '../../assets/music-icon.png',
    '../../assets/document-viewer--icon.png',
    '../../assets/software-center-icon.png',
    '../../assets/trash-icon.png',
  ]

  ngOnInit(): void {
    const now = new Date();

    this.formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'numeric',
      day: 'numeric'
    }).format(now);

    this.formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
}

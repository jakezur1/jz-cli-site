import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-boot-up-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './boot-up-progress-bar.component.html',
  styleUrl: './boot-up-progress-bar.component.css'
})
export class BootUpProgressBarComponent implements OnInit{
  constructor(private router: Router) {}

  bootUpMessages: string[] = [
    'Initializing system components...',
    'Loading Configuration Files...',
    'Establishing Network Connections...',
    'Starting Services...',
    'Starting Services...',
    'Checking for Updates...',
    'Finalizing Setup...'
  ]
  currentMessage: string = this.bootUpMessages[0];

  ngOnInit() {
    this.updateMessages();
  }

  updateMessages() {
    const intervalTimes = this.generateRandomIntervals(1000, this.bootUpMessages.length);
    let cumulativeTime = 0;

    this.bootUpMessages.forEach((message, index) => {
      cumulativeTime += intervalTimes[index];
      setTimeout(() => {
        this.currentMessage = message;
        if (index === this.bootUpMessages.length - 1) {
          this.router.navigate(['/terminal']);
        }
      }, cumulativeTime);
    });
  }

  generateRandomIntervals = (totalTime: number, numIntervals: number) => {
    let intervals = [];
    let remainingTime = totalTime;

    for (let i = 0; i < numIntervals; i++) {
      let interval = Math.random() * remainingTime;
      intervals.push(interval);
      remainingTime -= interval;
    }

    intervals.push(remainingTime);

    for (let i = intervals.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [intervals[i], intervals[j]] = [intervals[j], intervals[i]];
    }

    return intervals;
  }

}

import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BootUpComponent} from './boot-up/boot-up.component';
import {TerminalComponent} from './terminal/terminal.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BootUpComponent, TerminalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.navigate(['/boot-up'])
  }
}

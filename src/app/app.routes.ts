import { Routes } from '@angular/router';
import {BootUpComponent} from './boot-up/boot-up.component';
import {TerminalComponent} from './terminal/terminal.component';

export const routes: Routes = [
  { path: 'boot-up', component: BootUpComponent },
  { path: 'terminal', component: TerminalComponent },
  { path: '', redirectTo: '/boot-up', pathMatch: 'full' },
  { path: '**', redirectTo: '/terminal' }
];

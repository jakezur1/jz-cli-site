import { Routes } from '@angular/router';
import {BootUpComponent} from './boot-up/boot-up.component';
import {TerminalComponent} from './terminal/terminal.component';
import {DesktopComponent} from './desktop/desktop.component';

export const routes: Routes = [
  { path: 'boot-up', component: BootUpComponent },
  { path: 'desktop', component: DesktopComponent },
  { path: '', redirectTo: '/boot-up', pathMatch: 'full' },
  { path: '**', redirectTo: '/desktop' }
];

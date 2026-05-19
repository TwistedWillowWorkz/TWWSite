import { Component, signal } from '@angular/core';
import { SiteFooter } from './layout/site-footer/site-footer';
import { HomePage } from './pages/home-page/home-page';
import { SiteHeader } from "./layout/site-header/site-header";


@Component({
  selector: 'app-root',
  imports: [SiteFooter, HomePage, SiteHeader],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('twisted-willow-workz-website');
}

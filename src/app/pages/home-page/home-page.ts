import { Component } from '@angular/core';
import { WhatWeBuildSection } from '../what-we-build-section/what-we-build-section';
import { WorkshopSection } from '../workshop-section/workshop-section';
import { WhoWeAreSection } from '../who-we-are-section/who-we-are-section';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    WhatWeBuildSection,
    WorkshopSection,
    WhoWeAreSection,
    ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePage {}


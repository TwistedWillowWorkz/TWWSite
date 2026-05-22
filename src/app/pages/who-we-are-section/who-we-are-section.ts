import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

interface StudioRole {
  title: string;
  subtitle: string;
  description: string;
  imageClass: string;
  icons: string[];
}

@Component({
  selector: 'app-who-we-are-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './who-we-are-section.html',
  styleUrls: ['./who-we-are-section.css']
})
export class WhoWeAreSection {
  studioRoles: StudioRole[] = [
    {
      title: 'The Architect',
      subtitle: 'Systems & Code',
      description: 'Turns ideas into solid foundations and scalable systems.',
      imageClass: 'architect-image',
      icons: ['</>', '◉']
    },
    {
      title: 'The Storyweaver',
      subtitle: 'Design & Narrative',
      description: 'Weaves stories, worlds, and experiences that resonate and inspire.',
      imageClass: 'storyweaver-image',
      icons: ['✒', '▣']
    },
    {
      title: 'The Tinkerer',
      subtitle: 'Tools & Automation',
      description: 'Builds clever tools, automates the tedious, and experiments fearlessly.',
      imageClass: 'tinkerer-image',
      icons: ['⚙', '⌁']
    }
  ];
}

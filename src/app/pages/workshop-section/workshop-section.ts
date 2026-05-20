import { Component } from '@angular/core';

interface WorkshopItem {
  date: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-workshop-section',
  standalone: true,
  imports: [],
  templateUrl: './workshop-section.html',
  styleUrls: ['./workshop-section.css']
})
export class WorkshopSection {
  workshopItems: WorkshopItem[] = [
    {
      date: 'May 2, 2026',
      category: 'Sketch',
      title: 'Early Willow Concepts',
      description: 'Exploring the twisted roots and living circuits that started it all.',
      imageUrl: 'assets/image/workshop-sketch.png',
      imageAlt: 'Sketchbook concept art'
    },
    {
      date: 'May 9, 2026',
      category: 'Develop',
      title: 'Building the Foundation',
      description: 'Core architecture, database models, and the first working pieces.',
      imageUrl: 'assets/image/workshop-code.png',
      imageAlt: 'Code editor with project files'
    },
    {
      date: 'May 15, 2026',
      category: 'UI/UX',
      title: 'Designing Experiences',
      description: 'Crafting interfaces that feel immersive, intuitive, and a little magical.',
      imageUrl: 'assets/image/workshop-ui.png',
      imageAlt: 'Fantasy styled application dashboard'
    },
    {
      date: 'May 21, 2026',
      category: 'Art',
      title: 'Worldbuilding in Progress',
      description: 'Concept art and mood boards for worlds that do not exist yet.',
      imageUrl: 'assets/image/workshop-worldbuilding.png',
      imageAlt: 'Dark fantasy worldbuilding artwork'
    },
    {
      date: 'May 27, 2026',
      category: 'Thoughts',
      title: 'Lessons & Realizations',
      description: 'Breakthroughs, failures, and the notes that shape what comes next.',
      imageUrl: 'assets/image/workshop-notes.png',
      imageAlt: 'Notebook with handwritten project notes'
    }
  ];
}

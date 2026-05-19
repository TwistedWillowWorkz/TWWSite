import { Component } from '@angular/core';

type ProjectFilter = 'all' | 'vellichor' | 'ashenwild' | 'tww-site';

interface WorkshopItem {
  project: ProjectFilter;
  projectLabel: string;
  status: 'In Progress' | 'Planning' | 'Recently Updated';
  title: string;
  description: string;
}

@Component({
  selector: 'app-workshop-section',
  standalone: true,
  imports: [],
  templateUrl: './workshop-section.html',
  styleUrls: ['./workshop-section.css']
})
export class WorkshopSection {
  selectedProject: ProjectFilter = 'all';

  projectTabs: { label: string; value: ProjectFilter }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Vellichor Nook', value: 'vellichor' },
    { label: 'Ashenwild', value: 'ashenwild' },
    { label: 'TWW Site', value: 'tww-site' }
  ];

  workshopItems: WorkshopItem[] = [
    {
      project: 'vellichor',
      projectLabel: 'Vellichor Nook',
      status: 'In Progress',
      title: 'Reading Dashboard Buildout',
      description:
        'Shaping the dashboard, stats cards, reading charts, and cozy library experience.'
    },
    {
      project: 'tww-site',
      projectLabel: 'TWW Site',
      status: 'In Progress',
      title: 'Studio Website Foundation',
      description:
        'Building the public home for Twisted Willow Workz, including project sections and development updates.'
    },
    {
      project: 'ashenwild',
      projectLabel: 'Ashenwild',
      status: 'Planning',
      title: 'World & Tavern Concepts',
      description:
        'Exploring early concepts for immersive fantasy spaces, campaign tools, and living-world features.'
    },
    {
      project: 'vellichor',
      projectLabel: 'Vellichor Nook',
      status: 'Recently Updated',
      title: 'Library Views & Book Cards',
      description:
        'Refining the book list, card layouts, filters, sorting, and responsive library views.'
    }
  ];

  get filteredWorkshopItems(): WorkshopItem[] {
    if (this.selectedProject === 'all') {
      return this.workshopItems;
    }

    return this.workshopItems.filter(
      item => item.project === this.selectedProject
    );
  }

  selectProject(project: ProjectFilter): void {
    this.selectedProject = project;
  }
}
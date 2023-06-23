import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Protfolio',
      src: '../../../assets/resume.png',
      about:
        'Creative Portfolio Showcasing Design Excellence and Innovation as a Fresher.',
      link: 'x',
    },
    {
      name: 'CURD',
      src: '../../../assets/2559486.png',
      about:
        ' CRUD Operations: Leveraging Data Management Skills for OptimalResults.',
      link: 'https://github.com/GautamYadav19/Employe-application.git',
    },
    {
      name: 'E-commerce',
      src: '../../../assets/39574242-e-commerce-icon.webp',
      about:
        '  E-Commerce Site Operations Specialist: Streamlining Online RetailOperations for Success.',
      link: 'x',
      update: '../../../assets/icons8-coming-soon-64.png',
    },
  ];
}

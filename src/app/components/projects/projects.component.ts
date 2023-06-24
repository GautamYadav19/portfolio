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
      link: 'https://github.com/GautamYadav19/portfolio.git',
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
      src: '../../../assets/3700298-removebg-preview.png',
      about:
        '  E-Commerce Site Operations Specialist: Streamlining Online RetailOperations for Success.',
      link: 'https://github.com/GautamYadav19/project.git',
      update: '../../../assets/icons8-coming-soon-64.png',
    },
  ];
}

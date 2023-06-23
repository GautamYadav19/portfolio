import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  count1 = 1;
  count2 = 1;
  dropdown1: boolean = false;
  dropdown2: boolean = false;
  constructor() {}
  skills: any = [
    {
      frontEnd: [
        { skill: 'Angular', percent: '95%' },
        { skill: 'JavaScript', percent: '90%' },
        { skill: 'HTML', percent: '75%' },
        { skill: 'Css/Css3', percent: '60%' },
        { skill: 'Bootstrap', percent: '70%' },
      ],
      backEnd: [
        { skill: 'NodeJs', percent: '85%' },
        { skill: "RESTAPI's", percent: '95%' },
        { skill: 'MySql', percent: '97%' },
        { skill: 'MongoDB', percent: '55%' },
        { skill: 'Firebase', percent: '20%' },
      ],
    },
  ];
  OnClick1() {
    this.count1++;
    console.log(this.count1);
    if (this.count1 % 2 == 0) {
      this.count1 + 1;
      this.dropdown1 = true;
      this.dropdown2 = false;
      console.log(this.count1);
    } else {
      this.dropdown1 = false;
    }
  }
  OnClick2() {
    this.count2++;
    console.log(this.count2);
    if (this.count2 % 2 == 0) {
      this.count2 + 1;
      this.dropdown2 = true;
      this.dropdown1 = false;
      console.log(this.count2);
    } else {
      this.dropdown2 = false;
    }
  }
}

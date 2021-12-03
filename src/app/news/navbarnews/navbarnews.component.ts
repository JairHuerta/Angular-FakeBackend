import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarnews',
  templateUrl: './navbarnews.component.html',
  styleUrls: ['./navbarnews.component.less']
})
export class NavbarnewsComponent implements OnInit {
  @Input() title: string;

  constructor() {
    this.title = '';
   }

  ngOnInit(): void {
  }

}

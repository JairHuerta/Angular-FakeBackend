import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.less']
})
export class ListNewsComponent implements OnInit {
  @Input() listnews: any;

  constructor() { }

  ngOnInit(): void {
  }

}

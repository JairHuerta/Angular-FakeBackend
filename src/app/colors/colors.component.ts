import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  color1 = 'red';
  color2 = 'blue';
  direction = "to right";

  id = 1;

  selectMe(id){
    this.id = id;
  }

  constructor() { }

  ngOnInit() {
  }

}

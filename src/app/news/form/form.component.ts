import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Output() parameterSelected = new EventEmitter<any>();

  catSelected ='general';
  couSelected = 'mx';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'business', name: 'Negocios'},
    {value: 'sports', name: 'Deportes'},
    {value: 'technology', name: 'Tecnología'}
  ];

  countries: any[] = [
    {value: 'mx', name: 'México'},
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brazil'},
    {value: 'fr', name: 'Francia'}
  ]

  constructor() { }

  ngOnInit(): void {
  }


  searchNew(){
    const PARAMETERS = {
      category: this.catSelected,
      country: this.couSelected
    }

    this.parameterSelected.emit(PARAMETERS)
  }

}

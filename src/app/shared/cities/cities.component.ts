import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  constructor() { }
  cities: any = [
    {
      sublinks: ["Aberdeen", "Belfast", "Birmingham", "Brighton and Sussex", "Cambridge and East Anglia", "Cardiff"],
    },
    {
      sublinks: [
        "Edinburgh",
        "Glasgow",
        "Hull",
        "Leeds",
        "Leicester",
        "London"
      ],
    },
    {
      sublinks: ["Manchester", "Merseyside", "North East", "Northampton", "Milton Keynes", "Nottingham"],
    },
    {
      sublinks: ["Oxford", "Sheffield", "South coast", "South West", "Stoke"],
    }
  ];


  ngOnInit(): void {
  }

}

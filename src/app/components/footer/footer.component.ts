import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLink: any = [
    {
      sublinks: ["Get Help", "Buy gift cards", "Add your restaurant", "Sign up to deliver", "Create a business account", "Promotions"],
    },
    {
      sublinks: ["Restaurants near me ", "View all cities", "View all countries", "Pickup near me", "About Us","English"]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

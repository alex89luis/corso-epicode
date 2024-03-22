import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  brand!:Brand[];

  constructor() {
    this.getbrand();
  }

  async getbrand() {
    const response= await fetch('../../assets/db.json');
    const data = await response.json();
    this.brand = data;
  }

}

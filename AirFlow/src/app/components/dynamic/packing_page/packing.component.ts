import { Component } from '@angular/core';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent {
  toDisplay = false;


  toggleData() {
    this.toDisplay = !this.toDisplay;
  }

  typesOfShoes: string[] = ['Boarding pass', 'Wallet', 'Clothes', 'Moccasins', 'Sneakers', 'Drivers License', 'Jacket', 'Laptop','Cellphone', 'Optional: Passport'];

}

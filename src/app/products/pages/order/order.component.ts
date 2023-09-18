import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero, color } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public hero: Hero[] = [
    {
      name: 'Super man',
      canFly: true,
      color: color.blue
    },
    {
      name: 'Bat man',
      canFly: false,
      color: color.black
    },
    {
      name: 'Robinn',
      canFly: false,
      color: color.green
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: color.green
    }
  ];




  toggleUpperCase(): void {

    this.isUpperCase = !this.isUpperCase
  }



  changeOrder(value: keyof Hero) {
    this.orderBy = value

  }


}

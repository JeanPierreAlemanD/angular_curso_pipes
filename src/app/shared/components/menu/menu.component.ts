import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menuItem: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItem = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-destok',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/basics'
          }, {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [{
          label: 'Otro elemento',
          icon: 'pi pi-cog'
        }]
      }
    ];
  }

}

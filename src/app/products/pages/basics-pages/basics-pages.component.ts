import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  public nameLower: string = 'jean pierre'
  public nameUpper: string = 'JEAN PIERRE'
  public fullname: string = 'JeAn PiErRe'
  public customDate: Date = new Date();

}

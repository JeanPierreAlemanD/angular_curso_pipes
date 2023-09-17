import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {


  // i18n Select
  name: string = 'JeanPierre'
  gender: 'male' | 'female' = 'male'
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }


  changeClient() {
    this.name = 'Melisa'
    this.gender = 'female'
  }

  // i18nPlural

  clients: string[] = ['Maria', 'Pedro', 'Fernando', 'hernando', 'Pierre', 'Jean']
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas  esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deteleClient() {
    this.clients.shift()
  }


  // keyValue pipe
  public person = {
    name: 'Jean pierre',
    age: 29,
    address: 'Peru, Lima',
  }


  // Async pipi
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(val => console.log('estoy contando: ', val))
  );


}

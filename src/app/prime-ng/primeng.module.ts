import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';



const ElementosPrimeNg = [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToastModule,
]


@NgModule({
    exports: [
        ElementosPrimeNg
    ],
})
export class PrimeNgModule { }


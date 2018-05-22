import { NgModule } from '@angular/core';
import { CarritoPage } from "./carrito";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations:[
        CarritoPage
    ],
    imports:[
        IonicPageModule.forChild(CarritoPage)
    ],
    exports:[
        CarritoPage
    ]
})
export class CarritoPageModule {}

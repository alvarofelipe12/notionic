import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProductoService } from "../../services/producto.service";

@IonicPage()
@Component({
    selector: 'page-carrito',
    templateUrl: 'carrito.html'
})
export class CarritoPage {
    productosCarrito=[{id:null, nombre:null, descripcion:null, precio:null, img:null}];
    id = null;
    total = null;
    constructor(public navCrtl: NavController, public navParams: NavParams, public productoService: ProductoService) {
        //this.productosCarrito = navParams.get("productosCarrito");
        this.productosCarrito = this.productoService.getProductosCarrito();
        this.total = +this.sumaPrecios();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CarritoPage');
    }
    comprar() {
        //console.log(JSON.stringify(this.productosCarrito));
        (<any>window).MiPlugin.saludo('crear', JSON.stringify(this.productosCarrito), this.successCallback, this.errorCallback);
        //alert("Orden de compra transmitida a Firebase by Google");
        
        this.navCrtl.pop();
        this.productosCarrito = [];
        return this.productosCarrito;
    }
    sumaPrecios(){
        var total = 0;
        for (let index = 0; index < this.productosCarrito.length; index++) {
            total = total+this.productosCarrito[index].precio;
        }
        
        return total;
    }

  //Funcion para desplegar la respuesta cuando es satisfactorio
  successCallback(message){
    alert(message+", Orden de compra transmitida a Firebase by Google");
}

//Funcion si hubo un error
errorCallback(message){

    alert(message);
}
    
}
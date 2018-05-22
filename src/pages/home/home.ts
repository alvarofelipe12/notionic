import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { ProductoService } from '../../services/producto.service';
import { DetallePage } from '../detalle/detalle';
import { CarritoPage } from '../carrito/carrito';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productosCarrito = null;
  productos=[];
  @ViewChild('myNav') nav: NavController
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public productoService: ProductoService,
    public platform: Platform
  ) {
    this.productos = productoService.getProductos();
    // this.productos = (<any>window).MiPlugin.saludo('leer', this.successCallback, this.errorCallback);
  }
  public goToDetail(id){
    this.navCtrl.push(DetallePage,{id:id});
  }
  public crearProducto(){
    // (<any>window).MiPlugin.saludo('crear', this.successCallback, this.errorCallback);
    this.navCtrl.push(DetallePage, {id:0});
  }
  public goToCarrito(){
    this.navCtrl.push(CarritoPage);
  }
  agregarAlCarrito(producto) {
    this.productoService.productosCarrito.push(producto);
    alert('Producto agregado al carrito con exito!');
    return this.productosCarrito;
  }

  //Funcion para desplegar la respuesta cuando es satisfactorio
  successCallback(message){
      alert(message);
  }

  //Funcion si hubo un error
  errorCallback(){
      alert("Hubo un error");
  }
}
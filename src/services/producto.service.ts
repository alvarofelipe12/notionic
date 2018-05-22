import { Injectable, Query } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class ProductoService{
    constructor(
    ){

    }
    productos = [{id:'3', nombre:'CD Docto Krapula', descripcion:'Bombea', precio:12, img:'https://direct.rhapsody.com/imageserver/images/Alb.221687537/500x500.jpg'},
                {id:'1', nombre:'CD Mago de Oz', descripcion:'Barakaldo', precio:15, img:'http://www.bigstore.cl/medios/thumbnail/m/mago-de-oz-barakaldo-df-tn-275x275-0-FFFFFF.jpg'},
                {id:'2', nombre:'CD Type O Negative', descripcion:'Slow, Deep and Hard ', precio:10, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Type_O_Negative_-_Slow%2C_Deep_And_Hard.jpg/220px-Type_O_Negative_-_Slow%2C_Deep_And_Hard.jpg'},
                {id:'4', nombre:'CD Sonata Arctica', descripcion:'Unia', precio:11, img: 'http://www.dvmusicshop.com/wp-content/uploads/2013/06/Sonata-Arctica-Unia.jpg'}];
    productosCarrito=[];
    public getProductos(){
        return this.productos;
    }
    public getProductosCarrito() {
        //this.productosCarrito.push(productosCarrito);
        return this.productosCarrito;
    }
    public getProducto(id){
        return this.productos.filter(function(e, i){return e.id==id})[0] || {id:null, nombre:null, descripcion:null, precio:null};
      }
    public crearProducto(producto){
        this.productos.push(producto);
    }
    public editarProducto(producto){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id==producto.id) {
                this.productos[i]=producto;   
            }            
        }
    }
    public borrarProducto(producto){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id==producto.id) {
                this.productos.splice(i,1);   
            }            
        }
    }
    
}
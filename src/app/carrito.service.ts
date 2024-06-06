import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private items: any[] = [];

  private _products: BehaviorSubject<any[]>;


  constructor() { 
    this._products=new BehaviorSubject<any[]>([])
  }


  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1); // Elimina 1 elemento en el índice especificado
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteProduct(index: number){
    this.items.splice(index,1);
    this._products.next(this.items);
    }
 

}



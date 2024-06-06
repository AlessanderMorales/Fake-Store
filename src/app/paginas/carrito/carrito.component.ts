import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { CarritoService } from '../../carrito.service'; // Asegúrate de que la ruta al servicio es correcta

=======
import { CarritoService } from '../../carrito.service';
>>>>>>> d532dac02b853851a67013834d7772384bdd9397

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule], // Añade aquí el CommonModule
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent {
  carritoService = inject(CarritoService);
  items: any[] = [];

  constructor() {
    this.items = this.carritoService.getItems();
  }

  onClickDelete(indice: number){
    this.carritoService.deleteProduct(indice);
  }

  removeFromCart(index: number) {
    this.carritoService.removeFromCart(index);
    this.items = this.carritoService.getItems(); // Actualiza la lista de items en el carrito
  }

}
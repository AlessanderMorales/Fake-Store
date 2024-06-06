import { Component, inject } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from "@angular/router";
import { Producto } from "../../interfaces/product";
import { ProductoService } from "../../servicios/producto.service";
=======
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/product';
import { ProductoService } from '../../servicios/producto.service';
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
<<<<<<< HEAD
  styleUrls: ['./detalles.component.scss']
=======
  styleUrls: ['./detalles.component.scss'] // Cambié 'styleUrl' a 'styleUrls'
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
})
export class DetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productoService: ProductoService = inject(ProductoService);
<<<<<<< HEAD
  carritoService: CarritoService = inject(CarritoService); // Inyectar el servicio de carrito
=======
  carritoService: CarritoService = inject(CarritoService); // Inyecta CarritoService aquí

>>>>>>> d532dac02b853851a67013834d7772384bdd9397
  detalleProducto: Producto | undefined;

  constructor() {
    const idProducto = Number(this.route.snapshot.params['id']);
<<<<<<< HEAD
=======
    // this.detalleProducto = this.productoService.obtenerProductoPorId(idProducto)
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
    this.productoService.obtenerProductoPorId(idProducto).subscribe(
      data => this.detalleProducto = data
    );
  }

  addToCart() {
    if (this.detalleProducto) {
      this.carritoService.addToCart(this.detalleProducto);
      console.log('Productos en el carrito: ', this.carritoService.getItems());
    }
  }
}

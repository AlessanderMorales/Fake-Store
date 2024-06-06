import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/product';
import { ProductoService } from '../../servicios/producto.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'] // Cambié 'styleUrl' a 'styleUrls'
})
export class DetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productoService: ProductoService = inject(ProductoService);
  carritoService: CarritoService = inject(CarritoService); // Inyecta CarritoService aquí

  detalleProducto: Producto | undefined;

  constructor() {
    const idProducto = Number(this.route.snapshot.params['id']);
    // this.detalleProducto = this.productoService.obtenerProductoPorId(idProducto)
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

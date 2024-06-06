import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';  // Importa esta utilidad para trabajar con observables como promesas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mi_tienda';
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private http: HttpClient) {  // Inyecta HttpClient aquí
    this.loadProducts();  // Carga productos al iniciar
  }

  async loadProducts() {
    const url = 'https://fakestoreapi.com/products';  // URL de la FakeStoreAPI
    this.products = await firstValueFrom(this.http.get<any[]>(url));
    this.filteredProducts = this.products;  // Inicializa los productos filtrados
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
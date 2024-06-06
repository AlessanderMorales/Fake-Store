import { Component } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';  // Importa esta utilidad para trabajar con observables como promesas
=======
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
>>>>>>> d532dac02b853851a67013834d7772384bdd9397

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
  title = 'mi_tienda';
  searchControl: FormControl = new FormControl('');
  products: any[] = [];  // Supongamos que tienes una lista de productos
  filteredProducts: any[] = [];

  constructor(private router: Router) {
    // Supongamos que cargas tus productos aquí
  }

  onSearch() {
    const query = this.searchControl.value;
    this.filterResults(query);
    if (query) {
      this.router.navigate(['/buscar'], { queryParams: { q: query } });
    }
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
<<<<<<< HEAD
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
=======
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(this.filteredProducts); // Puedes eliminar esto más tarde
  }
}
>>>>>>> d532dac02b853851a67013834d7772384bdd9397

import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
<<<<<<< HEAD
import { CarritoComponent } from './paginas/carrito/carrito.component';
=======
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

>>>>>>> d532dac02b853851a67013834d7772384bdd9397
export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'carrito', component: CarritoComponent }, 
<<<<<<< HEAD
=======
    { path: 'buscar', component: BuscarComponent },
>>>>>>> d532dac02b853851a67013834d7772384bdd9397
    { path: '**', component: PaginaNoEncontradaComponent }
];

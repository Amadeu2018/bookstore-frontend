import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/views/home/home.component';
import { CategoriaReadComponent } from './component/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './component/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './component/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './component/views/categoria/categoria-update/categoria-update.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent
    },
    {
    path: 'categorias',
    component: CategoriaReadComponent
    },
    {
      path: 'categorias/create',
      component: CategoriaCreateComponent
      },
      {
        path: 'categorias/delete/:id',
        component: CategoriaDeleteComponent
        },
      {
        path: 'categorias/update/:id',
        component: CategoriaUpdateComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

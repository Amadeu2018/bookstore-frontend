import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/views/home/home.component';
import { CategoriaReadComponent } from './component/views/categoria/categoria-read/categoria-read.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent
    },
    {
    path: 'categorias',
    component: CategoriaReadComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { ProdComponent } from './prod/prod.component';

const routes: Routes = [
  {
    path: "",
    component: PageComponent
  },
  {
    path: "marvel",
    component: MarvelComponent
  },
  {
    path: "dc",
    component: DcComponent
  },
  {
    path: "star_wars",
    component: StarWarsComponent
  },
  {
    path: "create",
    component: CreateProdComponent
  },
  {
    path: ":id",
    component: ProdComponent
  },
  {
    path: "marvel/:id",
    component: ProdComponent
  },
  {
    path: "dc/:id",
    component: ProdComponent
  },
  {
    path: "starwars/:id",
    component: ProdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

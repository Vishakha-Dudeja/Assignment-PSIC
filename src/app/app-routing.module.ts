import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'tables', component: TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNewAdComponent} from './pages/create-new-ad/create-new-ad.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'edit', component: CreateNewAdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

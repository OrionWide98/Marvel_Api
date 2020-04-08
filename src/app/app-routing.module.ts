import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { Error404Component} from './components/error404/error404.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'details', component: DetailsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

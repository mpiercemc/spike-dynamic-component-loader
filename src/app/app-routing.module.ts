import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MikeSpikeComponent } from './mike/mike-spike/mike-spike.component';

const routes: Routes = [
  { path: 'mike-spike', component: MikeSpikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

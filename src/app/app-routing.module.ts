import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'room/:id',
    component: RoomComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

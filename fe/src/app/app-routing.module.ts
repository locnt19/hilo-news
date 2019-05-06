import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from 'src/app/components/about/about.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  // { path: 'about', component: AboutComponent },
  // { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

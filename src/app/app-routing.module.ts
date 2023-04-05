import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingPageComponent } from './gamingPage/gamingPage.component';

const routes: Routes = [
  {
    path: '',
    component: GamingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

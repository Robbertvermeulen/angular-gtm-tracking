import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { MealplanComponent } from './mealplan/mealplan.component';

const routes: Routes = [
   { path: 'start', component: StartComponent },
   { path: 'meal-plan', component: MealplanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

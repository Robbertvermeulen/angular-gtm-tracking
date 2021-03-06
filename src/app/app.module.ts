import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MealplanComponent } from './mealplan/mealplan.component';

@NgModule({
   declarations: [
      AppComponent,
      StartComponent,
      MealplanComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      { provide: 'googleTagManagerId', useValue: 'GTM-PVTKHSZ' } // This is a temporarily GTM ID. We have to change this later and maybe store it in a environment var.
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }

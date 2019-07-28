import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { SearchService } from './_services/search.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
   declarations: [
      AppComponent,
      ItemComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      SearchService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

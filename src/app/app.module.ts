import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { DataService } from './services/data.service';

const appRoutes  : Routes = [
    {path:'',component:UsersComponent},
    {path:'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

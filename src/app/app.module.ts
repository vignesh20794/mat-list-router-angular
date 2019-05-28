import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const APP_ROUTES: Route[] = [
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/home' }
]
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AccountComponent,
    AppComponent,
    HomeComponent,
    SettingsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

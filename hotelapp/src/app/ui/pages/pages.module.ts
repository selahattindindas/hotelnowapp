import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HotelDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }

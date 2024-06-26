import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { ListRoomTypeComponent } from './list-room-type/list-room-type.component';
import { UpdateRoomTypeComponent } from './update-room-type/update-room-type.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddRoomTypeComponent,
    ListRoomTypeComponent,
    UpdateRoomTypeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ]
})
export class RoomTypeModule { }

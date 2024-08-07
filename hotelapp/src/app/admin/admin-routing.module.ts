import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoomTypeRoutingModule } from './components/room-types/room-type-routing.module';
import { StaffRoutingModule } from './components/staffs/staff-routing.module';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { BookingRoutingModule } from './components/bookings/booking-routing.module';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
     canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'room-types',
        loadChildren: () => import('./components/room-types/room-type-routing.module').then(m => m.RoomTypeRoutingModule),
        canActivate: [RoleGuard],
        data: { roles: ['MANAGER'] }
      },
      {
        path: 'staffs',
        loadChildren: () => import('./components/staffs/staff-routing.module').then(m => m.StaffRoutingModule),
        canActivate: [RoleGuard],
        data: { roles: ['MANAGER'] }
      },
      {
        path: 'hotel',
        loadChildren: () => import('./components/hotels/hotel-routing.module').then(m => m.HotelRoutingModule),
        canActivate: [RoleGuard],
        data: { roles: ['MANAGER'] }
      },
      {
        path: 'hotel-and-manager',
        loadChildren: () => import('./components/hotel-and-manager/hotel-and-manager.module').then(m => m.HotelAndManagerModule),
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] }
      },
      {
        path: 'room-type-main-facilities',
        loadChildren: () => import('./components/room-type-main-facilities/room-type-main-facility.module')
        .then(m => m.RoomTypeMainFacilityModule),
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] }
      },
      {
        path: 'neighborhoods',
        loadChildren: () => import('./components/neighborhoods/neighborhood.module')
        .then(m => m.NeighborhoodModule)
      },
      {
        path: 'districts',
        loadChildren: () => import('./components/districts/district.module')
        .then(m => m.DistrictModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('./components/cities/city.module').then(m => m.CityModule)
      },
      {
        path: 'facility-categories',
        loadChildren: () => import('./components/facility-categories/facility-category.module').then(m => m.FacilityCategoryModule),
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] }
      },
      {
        path: 'room-type-detail-categories',
        loadChildren: () => import('./components/room-type-detail-categories/room-type-detail-category.module').then(m => m.RoomTypeDetailCategoryModule),
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] }  
      },
      {
        path: 'main-facility-options',
        loadChildren: () => import('./components/main-facility-options/main-facility-option.module').then(m => m.MainFacilityOptionModule),
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] }
      },
      {
        path: 'bookings',
        loadChildren: () => import('./components/bookings/booking-routing.module').then(m => m.BookingRoutingModule),
        canActivate: [RoleGuard],
        data: { roles: ['MANAGER'] }
      },
    ]
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./components/login/login.module')
    .then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RoomTypeRoutingModule, StaffRoutingModule, BookingRoutingModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}

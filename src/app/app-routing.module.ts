import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MobileProductListComponent } from './mobile-product-list/mobile-product-list.component';
import { SamsungProductComponent } from './samsung-product/samsung-product.component';
import { DetailModelPageComponent } from './detail-model-page/detail-model-page.component';
import { AuthRouteGuard } from './auth-route.guard';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
   path:'register',component:RegistrationComponent
  },
  {
    path:'student/:id',component:StudentComponent
  },
  {
    path:'user-details',component:UserListComponent
  },
  {
      path:'userDtls/:usrId',component:UserDetailsComponent
  },
  {
    path:'add-User',component:AddUserComponent  
  },
  {
    path:'Contact',component:TemplateformComponent
},
{
  path:'add-product',component:ReactiveComponent
},
{
  path:'product-list',component:ProductListComponent, canActivate:[AuthRouteGuard] 
},
{
  path:'edit-product/:pId',component:EditProductComponent, canActivate:[AuthRouteGuard] 
},
{
  path:'mProduct-list',component:MobileProductListComponent  
},
{
  path:'samsung-product',component:SamsungProductComponent  
},
{
  path:'view-model/:id',component:DetailModelPageComponent  
},

  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

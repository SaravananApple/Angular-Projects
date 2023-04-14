import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';

import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MobileProductListComponent } from './mobile-product-list/mobile-product-list.component';
import { SamsungProductComponent } from './samsung-product/samsung-product.component';
import { DetailModelPageComponent } from './detail-model-page/detail-model-page.component';
import { AuthRouteGuard } from './auth-route.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { ServiceInterceptorInterceptor } from './service-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    RegistrationComponent,
    UserListComponent,
    StudentComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    ParentComponent,
    ChildComponent,
    TemplateformComponent,
    ReactiveComponent,
    ProductListComponent,
    EditProductComponent,
    MobileProductListComponent,
    SamsungProductComponent,
    DetailModelPageComponent,
    AddUserComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthRouteGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptorInterceptor,
      multi: true
      } ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

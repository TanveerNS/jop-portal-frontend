import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJobComponent } from './admin/pages/job/add-job/add-job.component';
import { LayoutComponent } from './admin/component/layout/layout.component';
import { LayoutComponent as HomeLayoutComponent } from './frontend/pages/layout/layout.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ListJobComponent } from './admin/pages/job/list-job/list-job.component';
import { UpdateJobComponent } from './admin/pages/job/update-job/update-job.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { LoginComponent as UserLoginComponent } from './frontend/pages/login/login.component';
import { RegisterComponent } from './admin/pages/register/register.component';
import { DetailJobComponent } from './admin/pages/job/detail-job/detail-job.component';
import { UserDetailComponent } from './admin/pages/user/user-detail/user-detail.component';
import { UserAddComponent } from './admin/pages/user/user-add/user-add.component';
import { UserUpdateComponent } from './admin/pages/user/user-update/user-update.component';
import { UserListComponent } from './admin/pages/user/user-list/user-list.component';
import { PostListComponent } from './frontend/pages/post/post-list/post-list.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { AboutComponent } from './frontend/pages/about/about.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { PostDetailComponent } from './frontend/pages/post/post-detail/post-detail.component';
import { HeaderComponent } from './frontend/component/header/header.component';
import { FooterComponent } from './frontend/component/footer/footer.component';
import { AppHeaderComponent } from './frontend/components/app-header/app-header.component';
import { AppFooterComponent } from './frontend/components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    LayoutComponent,
    HomeLayoutComponent,
    DashboardComponent,
    ListJobComponent,
    UpdateJobComponent,
    LoginComponent,
    RegisterComponent,
    DetailJobComponent,
    UserDetailComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserListComponent,
    PostListComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostDetailComponent,
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    AppHeaderComponent,
    AppFooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

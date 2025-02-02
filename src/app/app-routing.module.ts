import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './admin/component/layout/layout.component';
import { LayoutComponent as HomeLayoutComponent } from './frontend/pages/layout/layout.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AddJobComponent } from './admin/pages/job/add-job/add-job.component';
import { RegisterComponent } from './admin/pages/register/register.component';
import { RegisterComponent as UserRegisterComponent } from './frontend/pages/register/register.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { LoginComponent as UserLoginComponent } from './frontend/pages/login/login.component';
import { ListJobComponent } from './admin/pages/job/list-job/list-job.component';
import { UpdateJobComponent } from './admin/pages/job/update-job/update-job.component';
import { DetailJobComponent } from './admin/pages/job/detail-job/detail-job.component';
import { UserAddComponent } from './admin/pages/user/user-add/user-add.component';
import { UserListComponent } from './admin/pages/user/user-list/user-list.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { PostListComponent } from './frontend/pages/post/post-list/post-list.component';
import { AboutComponent } from './frontend/pages/about/about.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeLayoutComponent, 
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'job-list',
        component: PostListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'admin', 
    component: LayoutComponent, 
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'job/add',
        component: AddJobComponent 
      },
      {
        path: 'job/update/:id',
        component: UpdateJobComponent 
      },
      {
        path: 'job/detail/:id',
        component: DetailJobComponent 
      },
      {
        path: 'jobs',
        component: ListJobComponent
      },
      {
        path: 'user/add',
        component: UserAddComponent 
      },
      {
        path: 'user/update/:id',
        component: UpdateJobComponent 
      },
      {
        path: 'user/detail/:id',
        component: DetailJobComponent 
      },
      {
        path: 'user',
        component: UserListComponent
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: 'register', 
        component: RegisterComponent
      },
    ]
  },
  {
    path: 'login', 
    component: UserLoginComponent
  },
  {
    path: 'register', 
    component: UserRegisterComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

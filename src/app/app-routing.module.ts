import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, canActivate: [LoginGuard] },
  { path: 'user', component: UserEditComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

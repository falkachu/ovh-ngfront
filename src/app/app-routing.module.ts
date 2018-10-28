import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HalloComponent} from './hallo/hallo.component';
import {AuthGuardService} from './auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
      path: 'hallo',
      component: HalloComponent
    },
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule',
      canActivate: [AuthGuardService]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

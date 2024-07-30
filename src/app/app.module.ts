import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import appConfig from './config/app-config';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard,
} from '@okta/okta-angular';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const oktaConfig = Object.assign(
  {
    onAuthRequired: (oktaAuth, injector) => {
      const router = injector.get(Router);

      router.navigate(['/login']);
    },
  },
  appConfig.oidc
);

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    LoginStatusComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule,
    AppRoutingModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

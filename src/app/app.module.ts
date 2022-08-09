import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashComponent } from './components/dashboard/dash/dash.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { ManageInternsComponent } from './components/dashboard/manage-interns/manage-interns.component';
import { MessageComponent } from './components/dashboard/message/message.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { NotificationComponent } from './components/dashboard/notification/notification.component';
import { ModalComponent } from './components/assets/modal/modal.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashComponent,
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    ManageInternsComponent,
    MessageComponent,
    ProfileComponent,
    NotificationComponent,
    ModalComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'register', component: RegisterComponent},
      {path:'dashboard/dash', component: DashComponent},
      {path:'dashboard/manage', component: ManageInternsComponent},
      {path:'dashboard/message', component: MessageComponent},
      {path:'dashboard/profile', component: ProfileComponent},
      {path:'dashboard/notification', component: NotificationComponent},
      {path:'dashboard/settings', component: SettingsComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { NotificationComponent } from './notification/notification.component';
import { FriendComponent } from './friend/friend.component';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
// import { CarouselComponent } from './home/carousel/carousel.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HttpModule } from '@angular/http';

import { CookieModule } from 'ngx-cookie';

import { NgxPaginationModule } from 'ngx-pagination';

// import { ModalModule } from 'ngx-modialog';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LoginComponent,
    FooterComponent,
    MessageComponent,
    NotificationComponent,
    FriendComponent,
    NavigationBarComponent,
    ProfileComponent,
    RegistrationComponent,
    // CarouselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CookieModule.forRoot(),
    CarouselModule.forRoot(),
    HttpModule
    // ModalModule.forRoot(),
    // BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

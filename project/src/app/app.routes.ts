import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { NotificationComponent } from './notification/notification.component';
import { FriendComponent } from './friend/friend.component';
import { GuestComponent } from './guest/guest.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'message', component: MessageComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'friend', component: FriendComponent},
  { path: 'guest', component: GuestComponent},
  { path: 'feedback', component: FeedbackComponent},
  {path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '*',   redirectTo: 'home', pathMatch: 'full' },
];

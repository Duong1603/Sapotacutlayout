import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { ModalComponent } from './component/modal/modal.component';
import { NotificationComponent } from './component/notification/notification.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { GamingPageComponent } from './gamingPage/gamingPage.component';

@NgModule({
  declarations: [
    AppComponent,
    GamingPageComponent,
    SidebarComponent,
    ContentComponent,
    ModalComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './ app-routing.module'; // Adjust the path as needed

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// MDB Modules
// import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
// import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
// import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
// import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
// import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
// import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
// import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './ app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    // MdbCollapseModule,
    // MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    // MdbPopoverModule,
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    // MdbTabsModule,
    // MdbTooltipModule,
    MdbValidationModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

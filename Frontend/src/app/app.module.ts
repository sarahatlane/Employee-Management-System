import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './ app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { WjCoreModule } from '@grapecity/wijmo.angular2.core';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { WjChartModule } from '@grapecity/wijmo.angular2.chart';

import { WjChartMapModule } from '@grapecity/wijmo.angular2.chart.map';

import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';

import { WjInputModule } from '@grapecity/wijmo.angular2.input';

// MDB Modules
// import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
// import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchComponent } from './components/search/search.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { ReportComponent } from './components/report/report.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
    SearchComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WjCoreModule,

    WjGridModule,

    WjChartModule,

    WjChartMapModule,

    WjGaugeModule,

    WjInputModule,
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    // MdbCollapseModule,
    // MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    FormsModule,
    HttpClientModule,
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

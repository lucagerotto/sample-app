import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormsComponent } from './template-drive-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    HelloComponent,
    TabbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

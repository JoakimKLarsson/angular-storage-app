import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';
import { LoginGuard } from './guards/login.guard';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxFileDropModule,
    FlexLayoutModule,
    ComponentsModule,
    StoreModule.forRoot({}),
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

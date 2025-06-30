import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { Pipe1Pipe } from './shared/pipe1.pipe';
import { Dir1Directive } from './shared/dir1.directive';
import { MaxProtectComponent } from './health/max-protect/max-protect.component';
import { PersonalProtectComponent } from './health/personal-protect/personal-protect.component';
import { CarInsComponent } from './car-ins/car-ins.component';
import { CarIncComponent } from './motor/car-inc/car-inc.component';
import { MotorIncComponent } from './motor/motor-inc/motor-inc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Pipe1Pipe,
    Dir1Directive,
    MaxProtectComponent,
    PersonalProtectComponent,
    CarInsComponent,
    CarIncComponent,
    MotorIncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

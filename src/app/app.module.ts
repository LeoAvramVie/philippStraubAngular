import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SectionOneComponent} from './component/section-one/section-one.component';
import {SectionTwoComponent} from './component/section-two/section-two.component';
import {SectionThreeComponent} from './component/section-three/section-three.component';
import {SectionFourComponent} from './component/section-four/section-four.component';
import {SectionFiveComponent} from './component/section-five/section-five.component';
import {SectionSixComponent} from './component/section-six/section-six.component';
import {MatMenuModule} from '@angular/material/menu';
import { LogoCarouselComponent } from './component/logo-carousel/logo-carousel.component';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
    LogoCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

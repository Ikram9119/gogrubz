import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ImageWithTextComponent } from './shared/image-with-text/image-with-text.component';
import { DownloadComponent } from './shared/download/download.component';
import { MapComponent } from './shared/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CitiesComponent } from './shared/cities/cities.component';
import { JoinMovementComponent } from './shared/join-movement/join-movement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ImageWithTextComponent,
    DownloadComponent,
    MapComponent,
    CitiesComponent,
    JoinMovementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

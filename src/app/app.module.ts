import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducteursComponent } from './producteurs/producteurs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProducteursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LeafletModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

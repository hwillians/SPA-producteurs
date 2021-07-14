import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AvatarModule } from 'ngx-avatar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { ProducteursCardComponent } from './components/producteurs-card/producteurs-card.component';
import { ProducteursListComponent } from './components/producteurs-list/producteurs-list.component';
import { YieldCardComponent } from './components/yield-card/yield-card.component';
import { ProducteursComponent } from './producteurs/producteurs.component';




@NgModule({
  declarations: [
    AppComponent,
    ProducteursComponent,
    ProducteursListComponent,
    ProducteursCardComponent,
    YieldCardComponent,
    PersonalCardComponent
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
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

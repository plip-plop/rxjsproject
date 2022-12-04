import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CombinationComponent } from './components/combination/combination.component';
import { CreationComponent } from './components/creation/creation.component';
import { ExceptionComponent } from './components/exception/exception.component';
import { HighOrderComponent } from './components/high-order/high-order.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TraitementComponent } from './components/traitement/traitement.component';
import { SandBoxComponent } from './components/sand-box/sand-box.component';
import { DesincriptionComponent } from './components/desincription/desincription.component';

@NgModule({
  declarations: [
    AppComponent,
    TraitementComponent,
    SearchBarComponent,
    AccueilComponent,
    HighOrderComponent,
    CombinationComponent,
    ExceptionComponent,
    CreationComponent,
    SandBoxComponent,
    DesincriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

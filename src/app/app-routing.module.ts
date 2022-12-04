import { SandBoxComponent } from './components/sand-box/sand-box.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CombinationComponent } from './components/combination/combination.component';
import { CreationComponent } from './components/creation/creation.component';
import { ExceptionComponent } from './components/exception/exception.component';
import { HighOrderComponent } from './components/high-order/high-order.component';
import { TraitementComponent } from './components/traitement/traitement.component';
import { DesincriptionComponent } from './components/desincription/desincription.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'traitement',
    component: TraitementComponent,
  },
  {
    path: 'highorder',
    component: HighOrderComponent,
  },
  {
    path: 'combination',
    component: CombinationComponent,
  },
  {
    path: 'exception',
    component: ExceptionComponent,
  },
  {
    path: 'creation',
    component: CreationComponent,
  },
  {
    path: 'test',
    component: SandBoxComponent,
  },
  {
    path: 'desincription',
    component: DesincriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { map, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { ShadowComponent } from './../shadow/shadow.component';

@Component({
  selector: 'app-desincription',
  templateUrl: './desincription.component.html',
  styleUrls: ['./desincription.component.scss'],
})
export class DesincriptionComponent
  extends ShadowComponent
  implements OnInit, OnDestroy
{
  public souscription: Subscription = new Subscription();
  public maValeurHTML$: Observable<number> = of();

  // Source de données
  public serveur: Observable<number> = interval(1000).pipe(take(1)); // Simulation de serveur: 1 valeur émise après 1000ms, puis notification de complete
  public serveurFluxInfini: Observable<number> = interval(1000); // Simulation de serveur infini: 1 valeur émise toutes les 1000ms, pas de notification de complete

  constructor() {
    super();
  }

  ngOnInit(): void {
    /**
    // Exemple 1: Oubli de désincription
    this.serveurFluxInfini
      .pipe(
        // Operateurs:
        map((data) => data + 10)
      )
      .subscribe({
        next: (success) =>
          console.log(
            `J'ai pour valeur ${success} et je ne vais pas me désincrire!`
          ),
      });

    // Exemple 2: Avec unsubscribe
    this.souscription = interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => console.log(`Désincription lors du ngDestroy`),
      });

    // Exemple 3: Avec takeUntil
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => console.log(`Désincription lors du ngDestroy`),
      });

    // Exemple 4: HighOrder en flux infini
    interval(1000)
      .pipe(
        takeUntil(this.destroy$), // takeUntil doit être placé derrière l'opérateur High-order pour éviter les flux infinis
        mergeMap(() => interval(1000))
      )
      .subscribe({
        next: () => console.log(`HIGH-ORDER: Risque de flux infini!`),
      });

    // Exemple 5: Pipe async, pas besoin de subscribe ni de unsubscribe/takeUntil
    this.maValeurHTML$ = interval(1000).pipe(tap(console.log));
  */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.souscription.unsubscribe();
  }
}

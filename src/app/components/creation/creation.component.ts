import { ShadowComponent } from './../shadow/shadow.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, of, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * COMPONENT RxJS: CREATION.
 * Exemples: Creation operators.
 * Ces operators permettent de créer des sources d'émission (outer observables).
 * Utiles pour tester RxJS. Seul "of" est utilisable dans un contexte de travail.
 */
@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent
  extends ShadowComponent
  implements OnInit, OnDestroy
{
  // Responses (Affichage HTML)
  public responseFrom: string = '';
  public responseOf: string = '';
  public responseTimerNoArg: string = '';
  public responseTimerWithArg: string = '';

  // Sources d'émission (outer observables)
  public sourceFrom$: Observable<string> = from(['Plop', 'Plip', 'Plap']); // Emet N valeurs (1 valeur par élément du tableau)
  public sourceOf$: Observable<string[]> = of(['Plop', 'Plip', 'Plap']); // Emet 1 valeur (le tableau)
  public sourceTimerNoArg$: Observable<number> = timer(1000); // Emet 0 après 1s puis complete car le second argument n'est pas renseigné
  public sourceTimerWithArg$: Observable<number> = timer(1000, 2000); // Emet 0 après 1s, puis émet une valeur toutes les 2s (ne complete pas)
  public click$: Observable<Event> = fromEvent(document, 'click'); // Chaque event "click" est traité comme un observable

  constructor() {
    super();
  }

  ngOnInit(): void {
    // FROM
    this.sourceFrom$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        console.log(`OnNext sourceFrom$ - `, success);
        this.responseFrom += success + '--->';
      },
      complete: () => {
        console.log(`OnComplete sourceFrom$`);
        this.responseFrom += 'COMPLETE';
      },
    });

    // OF
    this.sourceOf$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        console.log(`OnNext sourceOf$ - `, success);
        this.responseOf += success + '--->';
      },
      complete: () => {
        console.log(`OnComplete sourceOf$`);
        this.responseOf += 'COMPLETE';
      },
    });

    // TIMER sans second argument (complete une fois la première valeur émise)
    this.sourceTimerNoArg$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        console.log(`OnNext sourceTimerNoArg$ - `, success);
        this.responseTimerNoArg += success + '--->';
      },
      complete: () => {
        console.log(`OnComplete sourceTimerNoArg$`);
        this.responseTimerNoArg += 'COMPLETE';
      },
    });

    // TIMER avec second argument (complete une fois la première valeur émise)
    this.sourceTimerWithArg$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        console.log(`OnNext sourceTimerWithArg$ - `, success);
        this.responseTimerWithArg += success + '--->';
      },
      complete: () => {
        console.log(`OnComplete sourceTimerWithArg$`);
        this.responseTimerWithArg += 'COMPLETE';
      },
    });

    // FROMEVENT, pour convertir des events (comme 'click') en Observables
    this.click$.pipe(takeUntil(this.destroy$)).subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

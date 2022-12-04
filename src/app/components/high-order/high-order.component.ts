import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ShadowComponent } from '../shadow/shadow.component';

/**
 * COMPONENT RxJS: HIGH-ORDER.
 * Exemples: High-order operators.
 * Ces operators permettent de faire appel à des observables à l'intérieur du pipe (inner observables).
 * Utiles pour éviter les subscribes imbriqués. Gestion plus fine des subscribes chaînés.
 */
@Component({
  selector: 'app-high-order',
  templateUrl: './high-order.component.html',
  styleUrls: ['./high-order.component.scss'],
})
export class HighOrderComponent
  extends ShadowComponent
  implements OnInit, OnDestroy
{
  // Sources d'émission (outer observables)
  public click$: Observable<Event> = fromEvent(document, 'click'); // Chaque event "click" est traité comme un observable
  public interval1: Observable<number> = interval(1000).pipe(take(10)); // 1 valeur émise par seconde, jusqu'à un maxum de 10 valeurs (0 à 9)
  public interval2: Observable<number> = interval(1000).pipe(take(2)); // 1 valeur émise par seconde, jusqu'à un maxum de 2 valeurs (0 et 1)

  constructor() {
    super();
  }

  ngOnInit(): void {
    /**
    this.interval1
      .pipe(
        concatMap((interval1) => {
          console.log(`Interval1 (source): ${interval1}`);
          return this.interval2;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((interval2) =>
        console.log(`Interval2 (subscribe): ${interval2}`)
      );

    this.interval1
      .pipe(
        exhaustMap((interval1) => {
          console.log(`Interval1 (source): ${interval1}`);
          return this.interval2;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((interval2) =>
        console.log(`Interval2 (subscribe): ${interval2}`)
      );

    this.click$
      .pipe(
        tap(() => console.log(`CLICK`)),
        switchMap(() => timer(1000, 1000)),
        takeUntil(this.destroy$)
      )
      .subscribe((success) => console.log(`switchMap-TIMER:` + success));

    this.click$
      .pipe(
        tap(() => console.log(`CLICK`)),
        mergeMap(() => timer(1000, 1000)),
        takeUntil(this.destroy$)
      )
      .subscribe((success) => console.log(`mergeMap-TIMER:` + success));

     */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

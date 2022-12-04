import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  combineLatest,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  timer,
  zip,
} from 'rxjs';
import { take, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { ShadowComponent } from '../shadow/shadow.component';

/**
 * COMPONENT RxJS: COMBINATION.
 * Exemples: Combination operators.
 * Ces operators permettent de combiner plusieurs sources d'émission (outer observables).
 * Utiles pour gérer la hiérarchie dans la récupération des données.
 */
@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss'],
})
export class CombinationComponent
  extends ShadowComponent
  implements OnInit, OnDestroy
{
  // Responses (Affichage HTML)
  public responseZip: string = '';
  public responseForkJoin: string = '';
  public responseForkJoinError: string = '';
  public responseCombineLatest: string = '';

  // Sources d'émission (outer observables)
  public click$: Observable<Event> = fromEvent(document, 'click'); // Chaque event "click" est traité comme un observable
  public timer1$: Observable<number> = interval(1000);
  public timer2$: Observable<number> = interval(2000);
  public sourceForkJoin1$: Observable<number> = interval(1000).pipe(take(5)); // Emet 1 valeur par seconde, jusqu'à un maximum de 5 (0 à 4)
  public sourceForkJoin2$: Observable<number> = interval(2000).pipe(take(2)); // Emet 1 valeur par 2 secondes, jusqu'à un maximum de 1 (0 à 1)

  // Sources d'émission combinées: 3 timers qui émettent toutes les 4s à l'infini. Le délai initial est de 1s/2s/3s.
  public timerCombine1$: Observable<number> = timer(1000, 4000);
  public timerCombine2$: Observable<number> = timer(2000, 4000);
  public timerCombine3$: Observable<number> = timer(3000, 4000);

  constructor() {
    super();
  }

  ngOnInit(): void {
    /**
    // FORKJOIN
    forkJoin([
      from(['Plop', 'Plip', 'Plap']),
      this.sourceForkJoin1$,
      this.sourceForkJoin2$,
    ])
      .pipe(
        tap(([valeur, interval1, interval2]: [string, number, number]): void =>
          console.log(
            `forkJoin Success after complete - valeur=`,
            valeur,
            `, interval1=`,
            interval1,
            `, interval2=`,
            interval2
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([valeur, interval1, interval2]) => {
          console.log(
            `forkJoin: valeur ${valeur}, interval1 ${interval1}s, interval2 ${interval2}s.`
          );
        },
        complete: () => {
          console.log(`OnComplete forkJoin`);
        },
      });

    // ZIP: 1 valeur "String" par seconde.
    zip(from(['Plip', 'Plop', 'Plup', 'Plap']), interval(1000))
      .pipe(
        tap(([valeur, interval]: [string, number]): void =>
          console.log(`ZIP=`, valeur, ` interval=`, interval)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([valeur, interval]) => {
          console.log(`OnNext Zip - `, {});
          this.responseZip += valeur + ` ` + interval + `s --->`;
        },
        complete: () => {
          console.log(`OnComplete valeurs$`);
          this.responseZip += 'COMPLETE';
        },
      });

    // ZIP accepte N observables secondaires.
    zip(from(['Plip', 'Plop', 'Plup', 'Plap']), interval(1000), interval(2000))
      .pipe(
        tap(([valeur, interval1, interval2]: [string, number, number]): void =>
          console.log(
            `ZIP= ${valeur}, interval1: ${interval1}s, interval2: ${interval2}s.`
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([valeur, interval]) => {
          console.log(`OnNext Zip - `, {});
          this.responseZip += valeur + ` ` + interval + `s --->`;
        },
        complete: () => {
          console.log(`OnComplete Zip`);
          this.responseZip += 'COMPLETE';
        },
      });

    // FORKJOIN
    forkJoin([
      from(['Plop', 'Plip', 'Plap']),
      this.sourceForkJoin1$,
      this.sourceForkJoin2$,
    ])
      .pipe(
        tap(([valeur, interval1, interval2]: [string, number, number]): void =>
          console.log(
            `forkJoin - valeur=`,
            valeur,
            `, interval1=`,
            interval1,
            `, interval2=`,
            interval2
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([valeur, interval]) => {
          console.log(`OnNext forkJoin - `, {});
          this.responseForkJoinError += valeur + ` ` + interval + `s --->`;
        },
        complete: () => {
          console.log(`OnComplete forkJoin`);
          this.responseForkJoinError += 'COMPLETE';
        },
      });

    // FORKJOIN: Si l'un des observables ne completent pas, forkJoin ne se résout pas!
    forkJoin([from(['Plop', 'Plip', 'Plap']), interval(1000)])
      .pipe(
        tap(
          ([valeur, interval]: [string, number]): void =>
            console.log(`forkJoin - valeur=`, valeur, ` interval=`, interval),
          takeUntil(this.destroy$)
        )
      )
      .subscribe({
        next: ([valeur, interval]) => {
          console.log(`OnNext forkJoin - `, {});
          this.responseForkJoinError += valeur + ` ` + interval + `s --->`;
        },
        complete: () => {
          console.log(`OnComplete forkJoin`);
          this.responseForkJoinError += 'COMPLETE';
        },
      });

    // COMBINELATEST: Combiner sans hiérarchie (N Observable sources)
    combineLatest([
      this.timerCombine1$,
      this.timerCombine2$,
      this.timerCombine3$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ([timer1, timer2, timer3]: [number, number, number]) => {
          console.log(
            `combineLatest - Timer n°1 ${timer1}s, Timer n°2 ${timer2}s, Timer n°3 ${timer3}s.`
          );
          this.responseCombineLatest = `combineLatest - Timer n°1 ${timer1}s, Timer n°2 ${timer2}s, Timer n°3 ${timer3}s.`;
        },
      });

    // WITHLATESTFROM: Combiner avec hiérarchie (1 Observable source, N Observables secondaires)
    this.click$
      .pipe(
        withLatestFrom(this.timer1$, this.timer2$),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: ([evenement, timer1Seconde, timer2Secondes]: [
          Event,
          number,
          number
        ]) =>
          console.log(
            `withLatestFrom - Event(click)= ${evenement} avec timer1(1s)= ${timer1Seconde}s et avec timer2(2s)= ${timer1Seconde}s`
          ),
      });
  */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

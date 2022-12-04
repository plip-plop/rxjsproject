import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { delay, map, pluck, scan, takeUntil, tap } from 'rxjs/operators';
import { ShadowComponent } from '../shadow/shadow.component';

/**
 * COMPONENT RxJS: TRAITEMENT.
 * Exemples d'opérateurs de traitement.
 * Ces operators permettent de travailler sur la valeur présente dans le pipe.
 * Utiles pour simplifier les subscribes.
 */
@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.scss'],
})
export class TraitementComponent extends ShadowComponent implements OnInit {
  // Responses (Affichage HTML)
  public responsePluck: string = '';

  // Sources d'émission (outer observables)
  public click$: Observable<Event> = fromEvent(document, 'click');
  public source1$: Observable<string> = of('Source 1');
  public source2$: Observable<string> = of('Source 2');
  public source3$!: Observable<string>; // Déclarer pour récupérer la valeur dans l'HTML via "| async"
  public sourceNombre$: Observable<number> = of(1, 2, 3, 4, 5);

  // Sources d'émission: Pluck
  public personne$: Observable<Object> = of({
    nom: 'Bob',
    coordonnees: {
      adresse: 'Rue de Bob',
    },
  });

  // Sources d'émission: Scan
  public numbers$ = of(1, 2, 3);
  public sourceObject$ = of(
    { nom: 'Joe' },
    { age: 30 },
    { monAttribut: 'MaValeurAjoutee' }
  );

  constructor() {
    super();
  }

  ngOnInit(): void {
    /**
    // Traitement par subscribe:
    this.source1$
      .pipe(takeUntil(this.destroy$))
      .subscribe((succes) => console.log(succes));

    // Traitement par operator:
    this.source2$.pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();

    // Traitement par operator, subscribe via "| async":
    this.source3$ = of('Source 3').pipe(tap(console.log));

    //Exemple: pluck ("cueillir")
    this.personne$
      .pipe(
        pluck('coordonnees', 'adresse'),
        tap(console.log),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (success) => {
          console.log(`OnNext valeurs$ - `, success);
          this.responsePluck += success + '--->';
        },
        complete: () => {
          console.log(`OnComplete valeurs$`);
          this.responsePluck += 'COMPLETE';
        },
      });

    // Les clicks sont traités avec un délai de 1 seconde
    this.click$
      .pipe(delay(1000), takeUntil(this.destroy$))
      .subscribe((x) => console.log(x));

    // TAP, avec un Observer en paramètre
    this.sourceNombre$
      .pipe(
        map((val) => val + 10),
        tap({
          next: (val) => {
            // on next 11, etc.
            console.log('on next', val);
          },
          error: (error) => {
            console.log('on error', error.message);
          },
          complete: () => console.log('on complete'),
        })
      )
      // output: 11, 12, 13, 14, 15
      .subscribe({
        next: (val) => {
          // on next 11, etc.
          console.log('NEXT', val);
        },
        error: (error) => {
          console.log('ERROR', error.message);
        },
        complete: () => console.log('COMPLETE'),
      });
      

    // SCAN: Fonction "reduce" sur des nombres
    this.numbers$
      // Addition des valeurs émises, avec un état initial égal à 100
      .pipe(scan((total, nouvelleValeur) => total + nouvelleValeur, 100))
      .subscribe({ next: (data) => console.log('SCAN=', data) });

    // SCAN: Construction d'objet (reduxer function: assign/create)
    this.sourceObject$
      .pipe(
        scan((acc, curr) => Object.assign({}, acc, curr), {
          monAttribut: 'MaValeurInitiale',
        })
      )
      .subscribe({ next: (val) => console.log('Etat après SCAN:', val) });
  */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

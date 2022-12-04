import { ShadowComponent } from './../shadow/shadow.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

/**
 * COMPONENT RxJS: EXCEPTIONS.
 * Exemples: Exceptions.
 * Ces operators permettent de capturer OU de générer des exceptions.
 */
@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.scss'],
})
export class ExceptionComponent
  extends ShadowComponent
  implements OnInit, OnDestroy
{
  // Responses (Affichage HTML)
  public responseCatchError: string = '';
  public responseThrowError: string = '';

  // Sources d'émission (outer observables)
  public delais$: Observable<number> = of(1000, 2000, Infinity, 3000);
  public valeurs$: Observable<number> = of(1, 2, 3, 4, 5);
  public sourceError$: Observable<never> = throwError('Je suis une erreur!');

  constructor() {
    super();
  }

  ngOnInit(): void {
    /**

    // CATCH ERROR
    this.valeurs$
      .pipe(
        map((nombre) => {
          if (nombre === 4) {
            throw `ErreurVAL=4`;
          }
          return nombre;
        }),
        catchError((err) => of(err, `A`, `B`, `C`, `D`)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (success) => {
          console.log(`OnNext valeurs$ - `, success);
          this.responseCatchError += success + '--->';
        },
        error: (error) => {
          console.log(`OnError valeurs$ - `, error);
          this.responseCatchError += error + '---X';
        },
        complete: () => {
          console.log(`OnComplete valeurs$`);
          this.responseCatchError += 'COMPLETE';
        },
      });

    // THROW
    this.delais$
      .pipe(
        map((ms) => {
          if (ms < 10000) {
            return `Valeur passante ${ms}`;
          } else {
            // This is probably overkill: return throwError(() => new Error(`Valeur en erreur ${ms}`));
            throw new Error(`Valeur en erreur ${ms}`);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (success) => {
          console.log(`OnNext delais$ - `, success);
          this.responseThrowError += success + ' ';
        },
        error: (error) => {
          console.log(`OnError delais$ - `, error);
          this.responseThrowError += error + ' ';
        },
        complete: () => {
          console.log(`OnComplete delais$`);
          this.responseCatchError += 'COMPLETE';
        },
      });

    // THROWERROR (en tant que source)
    this.sourceError$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        console.log(`OnNext sourceError$ - `, success);
      },
      error: (error) => {
        console.log(`OnError sourceError$ - `, error);
      },
      complete: () => {
        console.log(`OnComplete sourceError$`);
      },
    });
  */
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

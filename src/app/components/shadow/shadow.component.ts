import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MARBLE_DATA } from 'src/app/datas/marbledata';

/**
 * Composant parent de tous les composants.
 * Annoté comme "Injectable" (et non "Component"): Ne doit pas être déclaré dans "appModule".
 */
@Injectable()
export class ShadowComponent implements OnInit {
  public MARBLE_DATA: any = MARBLE_DATA;
  public destroy$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarbleModel } from '../../models/marblemodel';
import { ShadowComponent } from '../shadow/shadow.component';

/**
 * COMPONENT RxJS: SEARCH-BAR.
 * Une TODO LIST pour marble diagrams.
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent extends ShadowComponent implements OnInit {
  // Input (opérateur recherché)
  public inputData: string = '';

  // Liste des marbles à afficher
  public operateurs: MarbleModel[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  // Menu: Display "High-Order"
  public ajouterHighOrderOperators(): void {
    this.operateurs = [];
    this.operateurs.push(
      this.MARBLE_DATA.CONCATMAP,
      this.MARBLE_DATA.MERGEMAP,
      this.MARBLE_DATA.SWITCHMAP,
      this.MARBLE_DATA.EXHAUSTMAP
    );
  }

  // Menu: Display "Combination"
  public ajouterCombinationOperators(): void {
    this.operateurs = [];
    this.operateurs.push(
      this.MARBLE_DATA.FORKJOIN,
      this.MARBLE_DATA.ZIP,
      this.MARBLE_DATA.COMBINELATEST,
      this.MARBLE_DATA.WITHLATESTFROM
    );
  }

  // Menu: Display "Timeline" (détails des timelines)
  public ajouterTimeline(): void {
    this.operateurs = [];
    this.operateurs.push(
      this.MARBLE_DATA.TIMELINE_OPERATOR,
      this.MARBLE_DATA.TIMELINE_EMIT,
      this.MARBLE_DATA.TIMELINE_ERROR,
      this.MARBLE_DATA.TIMELINE_COMPLETE
    );
  }

  // Menu: Display "Creation"
  public ajouterCreationOperators(): void {
    this.operateurs = [];
    this.operateurs.push(
      this.MARBLE_DATA.OF,
      this.MARBLE_DATA.FROM,
      this.MARBLE_DATA.FROMEVENT,
      this.MARBLE_DATA.INTERVAL,
      this.MARBLE_DATA.TIMER
    );
  }

  // Menu: Display "Opérateurs de traitement". Le terme "pipeable operator" désigne, selon la doc officielle, tous les operators qui sont placés dans le pipe.
  // Terme utilisé par opposition au terme "creation operator" (appelé également "source" ou "outer observable" selon le contexte, il désigne les Observables à l'origine du pipe).
  public ajouterPipeableOperators(): void {
    this.operateurs = [];
    this.operateurs.push(
      this.MARBLE_DATA.MAP,
      this.MARBLE_DATA.TAP,
      this.MARBLE_DATA.PLUCK,
      this.MARBLE_DATA.FILTER,
      this.MARBLE_DATA.SCAN,
      this.MARBLE_DATA.FIND,
      this.MARBLE_DATA.FINDINDEX
    );
  }

  // Menu: Display "Exceptions"
  public ajouterExceptions(): void {
    this.operateurs = [];
    this.operateurs.push(this.MARBLE_DATA.CATCHERROR, this.MARBLE_DATA.THROW);
  }

  // Ajouter un marble à la TODO LIST.
  public ajouterMarble(): void {
    const marbleModelRecherche =
      this.MARBLE_DATA[this.inputData?.toUpperCase()];

    if (!!marbleModelRecherche) {
      this.operateurs.splice(0, 0, marbleModelRecherche);
    }

    this.inputData = '';
  }

  // Reset la TODO LIST de marbles.
  public resetMarble(): void {
    this.operateurs = [];
  }

  // Supprimer un marble de la TODO LIST.
  public retirerMarble(index: number): void {
    this.operateurs.splice(index, 1);
  }
}

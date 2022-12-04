/**
 * COMPONENT RxJS: MARBLE_DATA.
 * Datas des objets "Marble".
 * cleUrl: Nom du fichier img associé au Marble.
 * signature: Signature de la méthode.
 * objectif: Objectif du Marble.
 * texte: Détails du Marble (avantages/risques, comportement sur le complete, etc.).
 */
export const MARBLE_DATA: any = {
  DEFAULT: {
    cleUrl: `rxjs_png`,
    signature: `Venez tester RxJS!`,
    objectif: ``,
    texte: ``,
  },
  CATCHERROR: {
    cleUrl: `catchError`,
    signature: `catchError(project : Function): Observable`,
    objectif: `Capturer une exception (notification d'erreur) depuis le pipe.`,
    texte: `Permet d'appliquer un traitement précis lorsque l'Observable source émet une notification d'erreur.`,
  },
  CONCATMAP: {
    cleUrl: `concatMap`,
    signature: ``,
    objectif: ``,
    texte:
      `Toutes les émissions successives sont traitées. Chaque nouvelle valeur est mise en attente: elle ne sera pas traitée tant que l'inner observable en cours n'a pas complete. ` +
      `takeUntil(this.destroy$) doit être placé derrière l'opérateur High-order pour éviter les flux infinis.`,
  },
  COMBINELATEST: {
    cleUrl: `combineLatest`,
    signature: `combineLatest([...args]: Object[]): Observable<[arg1, ...]>`,
    objectif:
      `Combiner N observables sources en un unique Observable<[]>. Le calcul des valeurs se fait à partir de la dernière valeur émise par chaque Observable. ` +
      `Le calcul des valeurs est déclenchée dès que l'un des observables sources émet une valeur.`,
    texte:
      `Cet opérateur n'induit pas de notion de hiérarchie entre les observables sources. ` +
      `Si l'un des Observables sources complete, cet opérateur continuera de calculer des valeurs (la dernière valeur des Observables qui ont complete sera constante). ` +
      `Cet opérateur complete lorsque tous ses observables sources ont complete.`,
  },
  ENDWITH: {
    cleUrl: `endWith`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
  EXHAUSTMAP: {
    cleUrl: `exhaustMap`,
    signature: ``,
    objectif: ``,
    texte:
      `Les nouvelles valeurs émises sont annulées tant que le traitement de l'inner observable n'a pas complete. ` +
      `takeUntil(this.destroy$) doit être placé derrière l'opérateur High-order pour éviter les flux infinis.`,
  },
  FILTER: {
    cleUrl: `filter`,
    signature: `filter(select: Function): Observable`,
    objectif: `Filtrer les valeurs émises en fonction du prédicat passé en paramètre. `,
    texte: ` Contrairement aux opérateurs "find" et "findIndex", cet opérateur ne renvoie pas de notification de complete lorsqu'il traite une valeur qui satisfait au prédicat.`,
  },
  FIND: {
    cleUrl: `find`,
    signature: `find(predicate: Function): Observable`,
    objectif: `Filtrer les valeurs émises en fonction du prédicat passé en paramètre. Dès qu'une valeur satisfait au prédicat, cet opérateur la renvoie sous forme d'Observable puis émet une notification de complete sans délai.`,
    texte: ``,
  },
  FINDINDEX: {
    cleUrl: `findIndex`,
    signature: `findIndex(predicate: Function): Observable`,
    objectif: `Filtrer les valeurs émises en fonction du prédicat passé en paramètre. Dès qu'une valeur satisfait au prédicat, cet opérateur renvoie son inde dans la séquence d'émission puis émet une notification de complete sans délai.`,
    texte: ``,
  },
  FORKJOIN: {
    cleUrl: `forkJoin`,
    signature: `forkJoin([...args]: Object[]): Observable<[arg1, ...]>`,
    objectif:
      `Combiner N observables sources en un unique Observable<[]> et complete sans délai. Le calcul des valeurs se fait à partir de la dernière valeur émise par chaque Observable. ` +
      `Le calcul des valeurs est déclenchée uniquement lorsque TOUS les observables sources ont complete.`,
    texte:
      `Cet opérateur n'induit pas de notion de hiérarchie entre les observables sources. ` +
      `Cet opérateur complete lorsque tous les observables sources ont complete: il émet donc une unique valeur puis complete sans délai. ` +
      `Si l'un des Observables sources ne complete pas, forkJoin ne produira pas de valeurs et ne sera jamais complete. ` +
      `Idéal pour initialiser une page!`,
  },
  FROM: {
    cleUrl: `from`,
    signature: `from([...args]: Object[]): Observable`,
    objectif: `Emettre un array sous la forme d'une série de valeurs et complete sans délai.`,
    texte:
      `Emet chaque élément de l'array sous la forme d'une valeur indépendante (observable). Complete immédiatement une fois la dernière valeur émise. ` +
      `Cet opérateur permet également d'émettre une string sous la forme d'une séquence de caractères si la string n'est pas déclarée dans un tableau.` +
      `Dans ce cas, la string est traitée comme une "collection" de caractères.`,
  },
  FROMEVENT: {
    cleUrl: `fromEvent`,
    signature: `fromEvent(target: any, eventName: string): Observable<Event>`,
    objectif: `Emettre une valeur à chaque événement passé en paramètre. Un Observable par click: "fromEvent(document, 'click'): Observable<Event>"`,
    texte: `Cet observable ne complete jamais.`,
  },
  IIF: {
    cleUrl: `iif`,
    signature: ``,
    objectif: `Choisir entre 2 Observables en fonction du prédicat passé en argument.`,
    texte: ``,
  },
  INTERVAL: {
    cleUrl: `interval`,
    signature: `interval(period: number): Observable<number>`,
    objectif: `Emettre des valeurs à l'infini.`,
    texte: `Emet une séquence de valeurs à arg1 millisecondes d'interval (1000 -> 1s). Cet observable ne complete jamais.`,
  },
  MAP: {
    cleUrl: `map`,
    signature: `map(project: Function, thisArg: any): Observable`,
    objectif: `Récupérer la valeur émise et lui appliquer des traitements.`,
    texte: `Contrairement à "tap", cet opérateur permet de modifier la valeur émise.`,
  },
  MERGEMAP: {
    cleUrl: `mergeMap`,
    signature: ``,
    objectif: ``,
    texte:
      `Toutes les émissions successives sont traitées. Chaque nouvelle valeur est traitée à la volée: elle est traitée dès qu'elle est émise. Contrairement à concatMap, cet opérateur n'attend pas que l'inner observable en cours ait complete. ` +
      `takeUntil(this.destroy$) doit être placé derrière l'opérateur High-order pour éviter les flux infinis.`,
  },
  OF: {
    cleUrl: `of`,
    signature: `of(...args): Observable<Object>`,
    objectif: `Emettre une série de valeurs et complete sans délai. Dans un contexte de développement: wrapper un objet dans un observable.`,
    texte: `Emet chaque arg sous la forme d'une valeur indépendante (observable). Complete immédiatement une fois la dernière valeur émise. Si un array est passé en argument, il sera traité comme un array (et non comme des valeurs indépendantes, comme c'est le cas pour l'opérateur "from").`,
  },
  PLUCK: {
    cleUrl: `pluck`,
    signature: `pluck(...args: string): Observable`,
    objectif: `Faire un "getAttribute" sur la valeur émise.`,
    texte: `On peut plucker sur plusieurs étages: "pluck('arg1', 'arg2')" est similaire à "valeur.arg1.arg2".`,
  },
  SCAN: {
    cleUrl: `scan`,
    signature: `scan(accumulator((acc, curr): Function, seed?: any): Observable`,
    objectif: `Appliquer un "accumulator" ("reduxer function") aux valeurs émises. Cet opérateur accepte un paramètre facultatif "seed", qui servira d'état intial à la fonction de réduction.`,
    texte: `Cet opérateur est appelé pour chaque valeur émise une fois que l'état initial aura été valorisé (via le paramètre "seed" s'il a été valorisé, ou lorsque la source émet une valeur, si le paramètre "seed" n'a pas été valorisé).`,
  },
  STARTWITH: {
    cleUrl: `startWith`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
  SWITCHMAP: {
    cleUrl: `switchMap`,
    signature: ``,
    objectif: ``,
    texte:
      `Toutes les émissions successives sont traitées. Chaque nouvelle valeur émise annule le traitement de l'inner observable en cours au profit de la nouvelle valeur. ` +
      `takeUntil(this.destroy$) doit être placé derrière l'opérateur High-order pour éviter les flux infinis.`,
  },
  TAP: {
    cleUrl: `tap`,
    signature: `tap(nextOrObserver: Function | Observer): Observable`,
    objectif: `Récupérer la valeur émise sans la modifier, afin de s'en servir pour appliquer des traitements sur d'autres valeurs/fonctions.`,
    texte: `Contrairement à "map", cet opérateur ne permet pas de modifier la valeur émise. Cet opérateur accepte également un Observer en paramètre (en lieu et place de la fonction).`,
  },
  THROW: {
    cleUrl: `throw`,
    signature: `throwError(error: any): Observable<never>`,
    objectif: `Emettre une notification d'erreur sans délai.`,
    texte: `L'Observable créé n'émet aucune valeur à l'Observer.`,
  },
  TIMER: {
    cleUrl: `timer`,
    signature: `timer(initialDelay: number | Date, period?: number): Observable`,
    objectif: `Emettre de 1 à N valeurs consécutives après un délai initial, avec un délai (period) entre chaque émission.`,
    texte:
      `Emet la valeur 0 au bout arg1 millisecondes. Si le second argument n'est pas renseigné, complete dès la première valeur émise. ` +
      `Si le second argument est renseigné, émet une valeur toutes arg2 millisecondes (1000 -> 1s). Dans ce cas, cet observable ne complete jamais.`,
  },
  WITHLATESTFROM: {
    cleUrl: `withLatestFrom`,
    signature: `withLatestFrom(...args): Observable<[arg1, ...]>`,
    objectif:
      `Combiner 1 Observable source avec N Observables passés en arguments. Le calcul des valeurs se fait à partir de la dernière valeur émise par chaque Observable. ` +
      `Le calcul des valeurs est déclenchée uniquement lorsque l'Observable source émet une valeur.`,
    texte:
      `Cet opérateur induit une notion de hiérarchie entre les observables: 1 Observable principal et N Observables secondaires. ` +
      `Le return est un Object[] (les paramètres sont dans l'ordre de déclaration des Observables: Observable principal, puis les Observables secondaires).`,
  },
  ZIP: {
    cleUrl: `zip`,
    signature: `zip(...args): Observable<[arg1, ...]>`,
    objectif:
      `Combiner N observables sources en un unique Observable<[]>. Le calcul des valeurs se fait à partir de la dernière valeur émise par chaque Observable. ` +
      `Le calcul des valeurs est déclenchée uniquement lorsque chaque Observable a émis sa N-ème valeur.`,
    texte:
      `Cet opérateur n'induit pas de notion de hiérarchie entre les observables sources. ` +
      `Il induit en revanche une notion d'ordre entre les valeurs: la 1ère valeur de arg1 est obligatoirement associée à la 1ère valeur de arg2, la 2nde de arg1 avec la 2nde de arg2, etc. ` +
      `Cet opérateur complete lorsque tous ses observables sources ont complete.`,
  },
  TIMELINE_OPERATOR: {
    cleUrl: `timeline_operator`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
  TIMELINE_EMIT: {
    cleUrl: `timeline_emit`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
  TIMELINE_ERROR: {
    cleUrl: `timeline_error`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
  TIMELINE_COMPLETE: {
    cleUrl: `timeline_complete`,
    signature: ``,
    objectif: ``,
    texte: ``,
  },
};

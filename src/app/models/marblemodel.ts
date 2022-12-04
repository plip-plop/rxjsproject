/**
 * COMPONENT RxJS: MarbleModel.
 * Représentationd'un objet "MarbleModel".
 * cleUrl: Nom du fichier img associé au Marble.
 * texte: Description du Marble.
 */
export class MarbleModel {
  public cleUrl: string;
  public signature: string;
  public objectif: string;
  public texte: string;

  constructor(
    cleUrl: string,
    signature: string,
    objectif: string,
    texte: string
  ) {
    this.cleUrl = cleUrl;
    this.signature = signature;
    this.objectif = objectif;
    this.texte = texte;
  }
}

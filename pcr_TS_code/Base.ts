export class Base {
  constructor(public bases:string[]) {
    this.bases=["A","G","T","C"];
  }
  /**
   * getBases
   */
  public getBases() {
    return this.bases;
  }
  public getRandomNeucleotide():string{
    return this.bases[Math.floor(Math.random() * this.bases.length)];
  }
}

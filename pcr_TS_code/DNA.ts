import { Base } from "./Base";
export class DNA {
  /**
  *matchNeucleotides
  *params: Random letter of type String
  *This function return matching neucleotide
  *return type String
  **/
  private matchNeucleotides(letter:string):string{
    if(letter == "A")
      return "T";
    else if(letter == "T")
      return "A"
    else if(letter == "C")
      return "G"
    else if(letter == "G")
      return "C"
    else{
      return "Error!!"
    }
  }
  private generateDNA(dnasize:number){
    for (let index = 0; index < dnasize; index++) {
      let initial = this.bases.getRandomNeucleotide();
      this.strands.push([initial,this.matchNeucleotides(initial)]);

    }
  }
  constructor(public size:number, public strands:string[][], public bases: Base) {

  }
}

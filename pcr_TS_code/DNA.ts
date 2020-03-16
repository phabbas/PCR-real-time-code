import { Base } from "./Base";
export class DNA {
  /**
  *matchNeucleotides
  *params: Random letter of type String
  *This function return matching neucleotide
  *return type String
  **/
  public matchNeucleotides(letter:string):string{
    if(letter == "A")
      return "T";
    else if(letter == "T")
      return "A"
    else if(letter == "C")
      return "G"
    else if(letter == "G")
      return "C"
    else{
      console.log("letter is " + letter);

      return "Error!!"
    }
  }
  public generateDNA(dnasize:number){
    let bases = new Base([""])
    for (let index = 0; index < dnasize; index++) {
      let initial = bases.getRandomNeucleotide();
      this.strands.push([initial,this.matchNeucleotides(initial)]);

    }
  }
  public size : number = 0;
  public getSize(){
    let num : number = 0;
    this.strands.forEach(element => {
      num++;
    });
    this.size = num;
    return this.size;
  }
  constructor( public strands:string[][]) {

  }
}

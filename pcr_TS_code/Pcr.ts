import { DNA } from "./DNA";
import { Base } from "./Base";
export class Pcr{
  public pcr_Dna : DNA;
  public B : Base;
  constructor(){
    this.pcr_Dna = new DNA(4,[["A","T"],["C","G"],["G","C"],["T","A"]],this.B);
  }
  public getNumberofDNA():number{
    return this.pcr_Dna.size

  }
}
/**
main app
**/
let mybase = new Base([""]);
let qpcr = new Pcr();
qpcr.B = mybase;
console.log(qpcr.getNumberofDNA());
console.log(qpcr.pcr_Dna);
console.log("Bases are : " + qpcr.B.getBases());

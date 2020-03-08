import { DNA } from "./DNA";
import { Base } from "./Base";
import { Temperature } from "./Temperature";
export class Pcr{
  public pcr_Dna : DNA;
  public B : Base;
  public temp_control :Temperature;
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
qpcr.temp_control = new Temperature(35,45,95);
console.log("current_temperature :: " +  qpcr.temp_control.getcurrenttemp());
if (qpcr.temp_control.getcurrenttemp() < 45 ) {
  qpcr.temp_control.setCurrentTemp(95);
  console.log("denature_temperature :: " + qpcr.temp_control.getcurrenttemp());

}

qpcr.B = mybase;
console.log(qpcr.getNumberofDNA());
console.log(qpcr.pcr_Dna);
console.log("Bases are : " + qpcr.B.getBases());

import { DNA } from "./DNA";
import { Base } from "./Base";
import { Temperature } from "./Temperature";
export class Pcr{
  public Dna_list : DNA[] = [new DNA([["A","T"],["C","G"],["G","C"],["T","A"]])];
  public B : Base;
  public temp_control : Temperature;
  /**
   * Denature_DNA
   */
  public Denature_DNA(test_Dna : DNA ) {
    let singleton1 : DNA = test_Dna;
    let singleton2 : DNA = new DNA([]);
    singleton1.strands.forEach(element => {
      singleton2.strands.push(this.Reverse_N(element))
    });
    this.Dna_list.push(singleton2);

  }
  /**
   * Reverse_N
   */
  public Reverse_N( s: string[]) : string[] {
    let reversed = [""];
    if(s.length == 2){
      reversed = [s[1],s[0]];
    }
    return reversed;
  }
  constructor(){


  }
  public getNumberofDNA():number{
    let num : number = 0;
    this.Dna_list.forEach(element => {
      num++
    });
    return num;
  }
}
/**
main app
**/

let qpcr = new Pcr();
qpcr.temp_control = new Temperature(35,45,95);
console.log("current_temperature :: " +  qpcr.temp_control.getcurrenttemp());
if (qpcr.temp_control.getcurrenttemp() < 45 ) {
  qpcr.temp_control.setCurrentTemp(95);
  console.log("denature_temperature :: " + qpcr.temp_control.getcurrenttemp());

}

qpcr.Denature_DNA(qpcr.Dna_list[0]);
qpcr.Dna_list.forEach(element => {
  console.log(element);

});

console.log(qpcr.getNumberofDNA());

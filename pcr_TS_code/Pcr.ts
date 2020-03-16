import { DNA } from "./DNA";
import { Base } from "./Base";
import { Temperature } from "./Temperature";




export class Pcr{

  public Dna_list : DNA[] = [new DNA([["A","T"],["C","G"],["G","C"],["T","A"]])];
  public B : Base = new Base([""]);
  public temp_control : Temperature = new Temperature(0,0,0);




  /**
   * Denature_DNA
   */
  public Denature_DNA(test_Dna : DNA ) {

    let singleton2 : DNA = new DNA([]);
    test_Dna.strands.forEach(element => {
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
const num_cycles = 5;

let qpcr = new Pcr();
qpcr.temp_control = new Temperature(35,45,95);
console.log("current_temperature :: " +  qpcr.temp_control.getcurrenttemp());
if (qpcr.temp_control.getcurrenttemp() < 45 ) {
  qpcr.temp_control.setCurrentTemp(95);
  console.log("denature_temperature :: " + qpcr.temp_control.getcurrenttemp());

}
console.log(qpcr.Dna_list[0]);

qpcr.Denature_DNA(qpcr.Dna_list[0]);
console.log("=======after======== denature")
qpcr.Dna_list.forEach(element => {
  console.log(element);

});

console.log("Number of DNA after Denature :: " + qpcr.getNumberofDNA());
for (let i = 0; i < num_cycles; i++) {
  qpcr.Dna_list.forEach(dna => {
    qpcr.Denature_DNA(dna);
  });

  console.log("Number of DNA strands after cycle_complete :: " + qpcr.getNumberofDNA());


}

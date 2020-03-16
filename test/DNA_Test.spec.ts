import {Pcr} from "../pcr_TS_code/Pcr";
import {Temperature} from "../pcr_TS_code/Temperature";
describe("MyApi getName function return value", () => {
    it("Should be defined.", () => {
        const qpcr = new Pcr();
        qpcr.temp_control = new Temperature(35,45,95);
        console.log("The current temp test");

        expect(qpcr.temp_control.getcurrenttemp()).toEqual(35);

    });

} );
/**
0.
Testing for presence of DNA strands before amplification requires purified DNA
from sample organisms.  Our process outlines that we place the test tube
with extracted and purified DNA onto the mantle of the PCR Machine, temperature
increased to denaturation temperature of 95C, then allow the photodiode to detect
DNA in solution.  If photodiode detects DNA in solution, move to DNA amplification.
If no DNA is detected by the photodiode, either DNA in solution isn't of sufficent quantity
for detection, or DNA is not present.

1.
With test tube of DNA, place onto mantle.  Let mantle increase temperature of the test tube to denaturation
temperature of about 95C.

2.
The detection of quantified DNA is produced via a system of an excitation filter, a photodiode,
an LED, and an emission filter.  The LED emits a blue excitation wavelength, which gets absorbed
by the excitation filter at about 455-495 nm, and passes this into the solution.  The intercalating
dyes in the DNA absorbs the excitation wavelength and emits a light.  This light is collected by
the photodiode, through and emission filter, and produces a voltage that is proportional to the
flourescence emission from the sample. This voltage is then amplified and read by the microcontroller.

3.
Collected voltage from the microcontroller gets displayed onto an LED screen to show real time quantification
of DNA strands per cycle.

4.
Once

*/

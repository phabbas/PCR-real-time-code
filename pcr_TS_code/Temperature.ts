export class Temperature {
  /**
   * getcurrenttemp
   */
  public getcurrenttemp():number {
    return this.current_temperature
  }
  /**
   * setCurrentTemp
   */
  public setCurrentTemp(mantleTemperature : number) {
    this.current_temperature = mantleTemperature
  }
  constructor(private current_temperature:number,
    private room_temperature:number,
    private denature_temperature:number) {

  }
}

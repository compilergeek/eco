export class PidDataProcess{

  public static useImperialUnits: boolean = true;

  //Default function
  private static defaultFunc(data) : any{
    return PidDataProcess.hexProcess(data);
  }

  //Vehicle RPM
  private static _010C(data: string) : any {
    return (PidDataProcess.hexProcess(data) / 4);
  }

  private static _0110(data: string) : any{
    return (PidDataProcess.hexProcess(data) / 100);
  }

  private static _0105(data: string) : any{
    return (PidDataProcess.hexProcess(data));
  }


  private static hexProcess(data: string) : number{
    return parseInt(data.replace(" ", "").trim(), 16);
  }

  public static getData(pid: string, data: string) : string{
    let func;
    switch(pid){
     case "010C": func = this._010C; break;
     case "0110": func = this._0110; break;
     case "0105": func = this._0105; break;
     default: func = this.defaultFunc; break;
    }

    return func(data.substring(6));
  }
}

export class ArrayBasic {
  
  public getLength():number {
    return this._array.length;
  }

  public addItem(n:number): number{
    this._array.push(n);
    return n;
  }

  private _array: number[] = [];
}
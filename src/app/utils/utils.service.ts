
import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
  public getOrderOfArraysFromObject(object: any, value: String) {

    return this.getListOfItemsOrderedByLast(object, value);
  }

  private getListOfItemsOrderedByLast (object: any, value: String) {

    return object.sort((a, b) => (a[`${value}`] > b[`${value}`]) ? 1 : ((b[`${value}`] > a[`${value}`]) ? -1 : 0)).reverse();
  }

  private getListOfItemsOrderedByFirst (object: any, value: String) {

    return object.sort((a, b) => (a[`${value}`] > b[`${value}`]) ? 1 : ((b[`${value}`] > a[`${value}`]) ? -1 : 0));
  }
}

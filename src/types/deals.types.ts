import { Request } from 'express';

import { ILaptop } from './laptop.types';

export interface ICustomerAddress {
  country: string
  city: string;
  street: string;
  postIndex: number;
}

export interface ICartItem<T> {
  amount: number;
  product: T;
}

export type ICartLaptop = ICartItem<ILaptop>;

export type ICartLaptopList = ICartLaptop[];

export interface ICustomerFormData {
  name: string;
  surname: string;
  phone: number;
  address: ICustomerAddress
}

export interface IDeal {
  customerID: string;
  customerData: ICustomerFormData
  products: ICartLaptopList
}

export interface IDelaRequest extends Request {
  body: IDeal
}

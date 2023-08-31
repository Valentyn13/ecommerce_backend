import { Request } from 'express';

interface ILaptopScreen {
  size: number;
  screenType: 'IPS' | 'OLED' | string;
  resolution: string;
}
interface ILaptopCPU {
  producer: 'Intel' | 'AMD' | 'Apple';
  model: string;
  cores: number

}
interface ILaptopVideoCard {
  producer: 'Intel' | 'AMD';
  model: string;
}

interface ILaptopHardDrive {
  value:number;
  hardType: 'SSD' | 'HDD'
}

export interface ILaptop {
  info?: string
  name: string;
  price: number;
  producer: string
  mainImage: string
  screen: ILaptopScreen;
  CPU: ILaptopCPU;
  videoCard:ILaptopVideoCard;
  hardDrive:ILaptopHardDrive;

}

export interface ILaptopRequest extends Request {
  body: ILaptop
}
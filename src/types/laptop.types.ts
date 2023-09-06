import { Request } from 'express';

interface ILaptopScreen {
  size: number;
  screenType: 'IPS' | 'OLED';
  resolution: string;
}
interface ILaptopCPU {
  producer: 'Intel' | 'AMD' | 'Apple' | 'Nvidia';
  model: string;
  cores: number

}
interface ILaptopVideoCard {
  producer: 'Intel' | 'AMD' | 'Apple' | 'Nvidia';
  model: string;
}

interface ILaptopHardDrive {
  value:number;
  hardType: 'SSD' | 'HDD'
}

export interface ILaptop {
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

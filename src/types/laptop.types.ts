import { Request } from 'express';

interface ILaptopScreen {
  size: '13' | '14' | '15.6' | '16' | '17';
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
  name: 'Lenovo' | 'Acer' | 'HP' | 'Asus' | 'Apple' | 'Dell'
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

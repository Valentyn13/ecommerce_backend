import { Request } from 'express';

export type SliderImagesCortage = [string, string, string];

export interface ISliderImages {
  laptopId: string;
  images: SliderImagesCortage;
}

export interface IGetSliderImages {
  laptopId: string
}

export interface IGetSliderImagesRequest extends Request {
  body: IGetSliderImages
}

export interface ISliderImagesRequest extends Request {
  body: ISliderImages

}

import { ParsedQs } from 'qs';
import SliderImages from '../models/sliderImagesModel';
import { ISliderImages } from '../types/sliderImages.types';

export default class SliderImagesService {
  async add(data: ISliderImages) {
    const sliderImages = await SliderImages.create(data);
    return sliderImages;
  }

  async get(data: ParsedQs) {
    const { laptopId } = data;
    const sliderImages = await SliderImages.findOne({ laptopId });
    return sliderImages;
  }
}

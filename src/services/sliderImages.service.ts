import SliderImages from '../models/sliderImagesModel';
import { IGetSliderImages, ISliderImages } from '../types/sliderImages.types';

export default class SliderImagesService {
  async add(data: ISliderImages) {
    const sliderImages = await SliderImages.create(data);
    return sliderImages;
  }

  async get(data:IGetSliderImages) {
    const { laptopId } = data;
    const sliderImages = await SliderImages.findOne({ laptopId });
    return sliderImages;
  }
}

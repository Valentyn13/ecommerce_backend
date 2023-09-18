import { Request } from 'express';

import SliderImagesService from '../services/sliderImages.service';
import { IGetSliderImagesRequest, ISliderImagesRequest } from '../types/sliderImages.types';

export class SliderImagesController {
  constructor(private sliderImagesService: SliderImagesService) {}

  async addImages(req: ISliderImagesRequest) {
    const images = await this.sliderImagesService.add(req.body);
    return images;
  }

  async getImages(req:IGetSliderImagesRequest) {
    const images = await this.sliderImagesService.get(req.query);
    return images;
  }

  async deleteImages(req: Request) {
    const images = await this.sliderImagesService.delete(req.params.id);
    return images;
  }
}

const sliderImagesController = new SliderImagesController(new SliderImagesService());
export default sliderImagesController;

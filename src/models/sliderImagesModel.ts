import { Model, Schema, model } from 'mongoose';
import { ISliderImages } from '../types/sliderImages.types';

const sliderImagesShema: Schema<ISliderImages> = new Schema({
  laptopId: {
    type: String,
    unique: true,
    required: [true, 'UserId is required for correct work'],
  },
  images: {
    type: [String],
    validate: {
      validator: (arr: string[]) => (arr.length >= 3),
      message: 'Slider need 3 images',
    },
  },
});

const SliderImages: Model<ISliderImages> = model('SliderImage', sliderImagesShema);

export default SliderImages;

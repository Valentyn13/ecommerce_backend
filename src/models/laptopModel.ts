import { Model, Schema, model } from "mongoose";

import { ILaptop } from "../types/product.types";
const laptopShema: Schema<ILaptop> = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  info: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  producer: {
    type:String,
    required: [true, 'Producer is required']
  },
  mainImage: {
    type: String,
    required: [true, 'Image is required']
  },
  screen: {
    size: {
      type: String,
      required: [true, 'Screen size is required'],
    },
    screenType: {
        type: String,
        required: [true, 'Screen type is required']
    },
    resolution: {
        type: String,
        required: [true, 'Screen resolution is required'],
      },
  },
  CPU: {
    producer:{
        type: String,
        required: [true, 'CPU producer is required']
    },
    model: {
        type: String,
        required: [true, 'CPU model is required']
    },
    cores: {
        type: Number,
        required: [true, 'CPU cores is required']
    }
  },
  videoCard: {
    producer:{
        type: String,
        required: [true, 'Videocard producer is required']
    },
    model: {
        type: String,
        required: [true, 'Videocard model is required']
    }
  },
  hardDrive: {
    value: {
        type: Number,
        required: [true, 'Hard disk value is required'],
    },
    hardType: {
        type: String,
        required: [true, 'Hard disk type is required']
    }
  }
});

const Laptop: Model<ILaptop> = model("Laptop", laptopShema);

export default Laptop;

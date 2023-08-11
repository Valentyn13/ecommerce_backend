import { Model, Schema, model } from "mongoose";

import { ILaptop } from "../types/product.types";
const laptopShema: Schema<ILaptop> = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  screen: {
    size: {
      type: String,
      required: true,
    },
    screenType: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true,
      },
  },
  CPU: {
    producer:{
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    cores: {
        type: Number,
        required: true
    }
  },
  videoCard: {
    producer:{
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
  },
  hardDrive: {
    value: {
        type: Number,
        required: true
    },
    hardType: {
        type: String,
        required: true
    }
  }
});

const Laptop: Model<ILaptop> = model("Laptop", laptopShema);

export default Laptop;

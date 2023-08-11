import Laptop from "../models/productModel"
import { ILaptop } from "../types/product.types"
export default class LaptopService {
  async add(data: ILaptop) {
    const laptop = await Laptop.create(data)
    return laptop
  }

  async remove(_id:string) {
    const laptop = await Laptop.findByIdAndDelete(_id)
    return 'Removed'
  }
}
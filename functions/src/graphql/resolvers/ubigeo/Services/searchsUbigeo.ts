import { getBaseRepository } from "fireorm";
import { Service } from "typedi";
import { Departamento } from "../entities/ubigeo";


@Service({ global: true })
export class searchsUbigeoService {

  private collection = getBaseRepository(Departamento)

  async getAll() {
    return this.collection.find();
  }

  async getOne(id: string) {
    return this.collection.findById(id)
  }

 
}
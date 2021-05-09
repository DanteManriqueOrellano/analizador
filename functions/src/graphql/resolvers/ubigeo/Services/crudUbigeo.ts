import { UserInputError } from "apollo-server-cloud-functions";

import { BaseFirestoreRepository, getRepository, runTransaction  } from "fireorm";
import { Service } from "typedi";
import {  Banda } from "../entities/CollectionBanda";



@Service({global:true})
export class CrudUbigeo{

    bandRepository:BaseFirestoreRepository<Banda>;
    
    constructor (){
      this.bandRepository = getRepository(Banda)

    }

    async addBand(band:Banda){

      const albumFull = this.serializeBand(band)

      await runTransaction<Banda>(async tran => {
       
        const bandTranRepository = tran.getRepository(Banda);

        const createdBand = await bandTranRepository.create(band);
        
        for(const unAlbum of albumFull.albums){
          
          for(const unaFoto of unAlbum.fotos){

            for(const unAutor of unaFoto.autores){
              const createdAlbum = await createdBand.albunes!.create(unAlbum)
              const createdFoto = await createdAlbum.fotos!.create(unaFoto)
              await createdFoto.autores!.create(unAutor)
            }
            
          }
  
        }

        return createdBand; 
       });
          
    }
    async deleteUbigeo(){}
  
    async updateOnlyBandById(band:Banda){
       
       this.updateBand(band); 
       
       return "joder"

    }
    
    async findUnUbigeoById(id:string){
      
        const bandrepository = await this.bandRepository.findById(id)
        
        if(!bandrepository){
          throw new UserInputError('No se encuentra la Banda con ese ID');
        }  
        return  bandrepository
    }

    private serializeAutor(foto:any){
        const au = foto.autores.map((unAutor:any)=>{
          return {
            "id":unAutor.id,
            "nombreAutor":unAutor.nombreAutor,
          }
        })
        return au
      }
    
      private serializeFotos(albunes:any){
        const al = albunes.fotos.map( (unafoto:any)=>{
          return  {
          "id" : unafoto.id,
          "nombreFoto" : unafoto.nombreFoto,
          "autors":this.serializeAutor(unafoto)
          }  
        }) 
        return  al
      }
      
      private serializeAlbum(banda:any){
        const otro = banda.albums.map((unAlbum:any)=>{
         return {
          "id" : unAlbum.id,
          "nombreAlbum": unAlbum.nombreAlbum,
          "fotos":this.serializeFotos(unAlbum)
         }
       })
          return otro
      }
    
      private serializeBand(banda:Banda){
        return {
          "id" : banda.id,
          "nombreBanda" : banda.nombreBanda,
          "albums" : this.serializeAlbum(banda)
        }
      }

      private async updateBand(unaBand:Banda){
        const banda = await this.bandRepository.findById(unaBand.id)
        banda.nombreBanda = unaBand.nombreBanda
        return await this.bandRepository.update(banda)
      }

      /*private async updateAlbum(unAlbum:Album){
        const banda = await this.bandRepository.whereIn((albun)=>albun.id,["01","02"]).find()
        
        console.log(banda);
        
      }*/
}



import { BaseFirestoreRepository, getRepository, runTransaction } from "fireorm";
import { Args, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Banda  } from "../entities/CollectionBanda";



@Service()
@Resolver()
export class UbigeoResolver {
  bandRepository:BaseFirestoreRepository<Banda>;
  
  //constructor(private readonly crudUbieo:CrudUbigeo){}

  @Mutation(()=>String)
  async addBand(
    @Args(()=>Banda) myBanda:Banda
    
  ):Promise<string>{

    this.bandRepository = getRepository(Banda)

    await runTransaction<Banda>(async tran => {
       
      const bandTranRepository = tran.getRepository(Banda);

      const createdBand = await bandTranRepository.create(myBanda);

      return createdBand; 
     });

    return "fola"

  }

   /* @Mutation(()=>String)
    async nuevoDepartamento(
        @Args(()=>Band,{validate:true}) band:Band
    ):Promise<String>{ 
      
      this.crudUbieo.addBand(band)

      return "newDepartamento"
    }

    @Query(()=>[Departamento])
    async listarDepartamentos():Promise<Departamento[]>{
      const departamentoRepository = getRepository(Departamento);
      return  await departamentoRepository.find()
    }

    @Query(()=>Band || String )
    async findBandById(
      @Arg("id") id:string
    ):Promise<Band | string> {
      return await this.crudUbieo.findUnUbigeoById(id)
      
    }
    @Mutation(()=>String)
    async updateOnlyBandById(
      @Args() band:Band

    ):Promise<string> {

      return this.crudUbieo.updateOnlyBandById(band)


    }
    @Query(() => Band)
    async buscaUnaBandaById(
      @Arg("id") id:string
    ):Promise<Band | null>{
      let bandRepository: BaseFirestoreRepository<Band>;
      bandRepository = getRepository(Band)

      const buscador = await bandRepository.runTransaction(async tran => {
        const foundBand = await tran.findById(id);
        return foundBand
      });

      return buscador

    }*/

   
   
}
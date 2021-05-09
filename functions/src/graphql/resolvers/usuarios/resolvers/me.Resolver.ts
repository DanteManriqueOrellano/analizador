import { Resolver, Query, Ctx } from "type-graphql";
import { getBaseRepository} from 'fireorm'
import { MyContext } from "../../../context/myContext";
import { Usuario } from "../entities/user";


@Resolver()
export class MeResolver {
  @Query(() => Usuario, { nullable: true })
  async me(
      
        @Ctx() ctx: MyContext
      
      ): Promise<Usuario | undefined> {
    
        
        if (!ctx.req.session!.userId) {
          return undefined;
        }
        const userCollection = getBaseRepository(Usuario);
        
        
        return await userCollection.findById(ctx.req.session!.userId);

    
  }
}
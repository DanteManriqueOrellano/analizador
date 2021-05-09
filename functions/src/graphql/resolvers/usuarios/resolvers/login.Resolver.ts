import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcrypt";
import { getBaseRepository} from 'fireorm'
import { MyContext } from "../../../context/myContext";
import { Usuario } from "../entities/user";



@Resolver()
export class LoginUserResolver {
  @Mutation(()=>Usuario)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx:MyContext
    
  ): Promise<Usuario | null> {
    const userCollections = getBaseRepository(Usuario)
    const documentUser = await userCollections.whereEqualTo(a=>a.email,email).findOne()
    console.log(documentUser)
    if (!documentUser) {
      return null;
    }

    const valid = await bcrypt.compare(password, documentUser.password);
    if (!valid) {
      return null;
    }
    ctx.req.session!.userId = documentUser.id
    

    return documentUser;
  }
}
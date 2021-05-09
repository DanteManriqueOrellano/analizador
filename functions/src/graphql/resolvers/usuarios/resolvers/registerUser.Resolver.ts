import { Args, Mutation, Resolver } from "type-graphql";
import bcrypt from "bcrypt";
import { getRepository } from "fireorm";
import { Usuario } from "../entities/user";
//import { isAuth } from "../../middleware/isAuth";



@Resolver()
export class RegisterUserResolver{
  
  //@UseMiddleware(isAuth)
  @Mutation(() => Usuario)
  async register(
      
      @Args() user:Usuario ,
       
    ): Promise<Usuario> {
      const hashedPassword = await bcrypt.hash(user.password, 12);
   
      const userRepository = getRepository(Usuario);
      const newUser =  await userRepository.create({
        email:user.email,
        firstName:user.firstName,
        password:hashedPassword,
        roles:user.roles
        
      });
      return newUser   
    }
}
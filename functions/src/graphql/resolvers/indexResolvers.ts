import { ClassType, NonEmptyArray } from "type-graphql";
import { UbigeoResolver } from "./ubigeo/resolvers/UbigeoResolver";
import { LoginUserResolver } from "./usuarios/resolvers/login.Resolver";
import { LogoutUserResolver } from "./usuarios/resolvers/logout.Resolver";
import { MeResolver } from "./usuarios/resolvers/me.Resolver";
import { RegisterUserResolver } from "./usuarios/resolvers/registerUser.Resolver";



export const clasesResolver:NonEmptyArray<ClassType> = [//poner "../**/**.ts"
    LoginUserResolver,
    MeResolver,
    LogoutUserResolver,
    RegisterUserResolver,
    UbigeoResolver
    
    
]
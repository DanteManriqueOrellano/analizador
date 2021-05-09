import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../context/myContext";


export const isAuth:MiddlewareFn<MyContext> = async ({context},next)=>{
    if(!context.req.session!.userId){
        throw new Error("nu autenticado");
        
    }
    return next();

} ;
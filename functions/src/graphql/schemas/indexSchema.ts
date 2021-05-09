import { buildSchema } from "type-graphql";
import Container from "typedi";
import { clasesResolver } from "../resolvers/indexResolvers";



//Container.set({ id: "SAMPLE_RECIPES", factory: () => sampleRecipes.slice() });
export const schemas:Promise<any> =  buildSchema(
    {
        resolvers: clasesResolver,
        validate:false,
        authChecker : ({context:{req}})=>{
            return  !!req.session.userId;
        },
        container:Container
            
    })

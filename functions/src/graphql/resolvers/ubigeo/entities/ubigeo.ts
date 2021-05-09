//un departamento tiene muchas provincias
//una provincia tiene muchos distritos
//u ndictrito tiene muchos centros poblados

import { SubCollection,ISubCollection } from "fireorm";
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";


@InputType('centroPobladoInput')
@ObjectType('centroPobladoObject')
@ArgsType()
export class CentroPoblado {
    @Field()
    id:string
    @Field()
    nombreCentroPoblado:string;
}

@InputType('distritoInput')
@ObjectType('distritoObject')
@ArgsType()
export class Distrito{
    @Field()
    id:string
    @Field()
    nombreDistrito:string;
    @Field((_type)=>[CentroPoblado])
    @SubCollection(CentroPoblado)
    centrosPoblados? : ISubCollection<CentroPoblado>;
}

@InputType('provinciaInput')
@ObjectType('provinciaObject')
@ArgsType()
export class Provincia {
    @Field()
    id:string
    @Field()
    nombreProvincia:string;
    @Field((_type)=>[Distrito])
    @SubCollection(Distrito)                        
    distritos:[ISubCollection<Distrito>];
}

@InputType('departamentoInput')
@ObjectType('departamentoObject')
@ArgsType()
export class Departamento{
    @Field()
    id:string
    @Field()
    nombreDepartamento:string;
    @Field((_type)=>[Provincia])
    @SubCollection(Provincia)
    provincias: [ISubCollection<Provincia>];
}



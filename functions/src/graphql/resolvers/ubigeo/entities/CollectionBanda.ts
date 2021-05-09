import { Collection, ISubCollection, SubCollection } from "fireorm";
import { InputType, ObjectType, ArgsType, Field } from "type-graphql";

@InputType()
@ObjectType()
@ArgsType()
export class Autor {
  @Field()
  id:string;
  @Field()
  nombreAutor:string
}


@InputType('fotoInput')
@ObjectType('fotoObject')
@ArgsType()
export class Foto {
  @Field()
  id:string;
  @Field()
  nombreFoto:string;
  @Field(_type=>[Autor],{nullable:true})
  @SubCollection(Autor,'autores')
  autores?:ISubCollection<Autor>
}


@InputType('albumInput')
@ObjectType('albumObject')
@ArgsType()
export class Album {
  @Field()
  id:string;
  @Field()
  nombreAlbum:string
  @Field(_type=>[Foto],{nullable:true})
  @SubCollection(Foto,'fotos')
  fotos?:ISubCollection<Foto>
}


@InputType('bandaInput')
@ObjectType('bandaObject')
@ArgsType()
@Collection('bandas')
export class Banda {
  @Field()
  id:string;
  @Field()
  nombreBanda:string;
  @Field(_type =>[Album],{nullable:true})
  @SubCollection(Album,'albunes')
  albunes?:ISubCollection<Album>  
}

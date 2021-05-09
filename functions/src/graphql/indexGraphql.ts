import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { schemas } from "./schemas/indexSchema";
import session from "express-session";
import cors from 'cors';

import {app} from '../index';

const {Firestore} = require('@google-cloud/firestore');
const {FirestoreStore} = require('@google-cloud/connect-firestore');

export async function prepararServidor(){

  
  
    const server = new ApolloServer({
      
      playground: true,
      introspection: true,
      schema: await schemas,
      context: ({ req,res }) => ({req,res}),
      
      
         
      
  });
  
  app.use(
    session({
      store: new FirestoreStore({
        dataset: new Firestore(),
        kind: 'express-sessions',
      }),
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        signed:true,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
        sameSite:true

      }
    })
  );
  app.use(cors({
      credentials : true,
      origin : "http://localhost:5001"
  }));

  
 

      server.applyMiddleware({app,path:'/joder',cors:true})
  }
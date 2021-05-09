import 'reflect-metadata'
import * as functions from 'firebase-functions' 
import express from 'express'
import { prepararServidor } from './graphql/indexGraphql'
import { connectFireBase } from './config/configDataBase'
export const app = express()
connectFireBase()
prepararServidor()

export const graphql = functions.https.onRequest(app); ;
 
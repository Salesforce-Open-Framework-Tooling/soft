import { Authentication } from "../authentication/exported";
import { QueryDefinition, Type } from "./QueryDefinition";
import { QueryHelper } from "./QueryHelper";

export class ApiManager{
  auth: Authentication;
  queryHelper: QueryHelper;
  constructor(auth: Authentication) {
    console.log('\n\t\tAPI Manager: Hello! I\'m the API Manager');
    this.auth = auth;
    this.queryHelper = new QueryHelper(auth);
  }

  public async execute(instructions: QueryDefinition): Promise<Array<string>>{
    console.log('\t\tAPI Manager: query:' + JSON.stringify(instructions));
    switch(instructions.Type) { 
      case Type.DESCRIBE: { 
         return await this.describe(instructions);
         break; 
      }
      default: { 
         //statements; 
         break; 
      } 
    } 
    
    // return this.queryHelper.execute(def.Expression.Query);
  }

  public async describe(instructions: QueryDefinition){
    console.log('describe');
    return this.queryHelper.describeGlobal(instructions);
  }

  // public async query(query: String) : Object{
  //   console.log('\t\tAPI Manager: I\'m performing the query.');
  //   let conn = this.auth.getConnection();
  //   let result = await conn.query(query);
  //   return result;
  // }
}
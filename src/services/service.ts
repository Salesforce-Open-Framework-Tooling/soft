import { ApiManager } from "../apiManager/exported";
import { Authentication } from "../authentication/exported";

export class Service{
  apiManager: ApiManager;
  constructor(auth: Authentication) {
    console.log('\n\tService: Hello! I\'m the Service Module!');
    this.apiManager = new ApiManager(auth);
  }
  public async helloWorld() {
    console.log('hello2');
    // let queryDef = {
    //   "Name": "TheNameOfTheQuery",
    //   "Type": QueryDefinition.ORG_SOQL,
    //   "Expression": { 
  
    //       "Query": "SELECT Id, Name FROM Organization LIMIT 1", 
    //       "Param": { "":"" }
    //   },
    //   "Header": {
  
    //       "Rename": { "SrcName": "DestName" },
    //       "RemoveOther": true,
    //       "AddPrefix": ""
    //   },
    //   "FileCaching": { 
    //       "Activate": true,
    //       "FolderName": "", 
    //       "FileName": ""
    //   }
    // };
    // let result = await this.apiManager.execute(queryDef);
    // for(let record of result.records){
    //   console.log('\n\tService: My Organization Name is "' + record.Name +'"');
    // }
  }
}  
import { ApiManager, QueryDefinition, Type } from "../apimanager/exported";
import { Authentication } from "../authentication/exported";
import { plainToClass } from 'class-transformer';

export interface MetadataConfig{
  allCustomObjects: boolean;
  objects: string[];
  excludeNamespaces: boolean
}

export class Metadata{
  apiManager: ApiManager;
  constructor(auth: Authentication) {
    console.log('\n\tService: Hello! I\'m the Service Module!');
    this.apiManager = new ApiManager(auth);
  }
  public async getModel(config: MetadataConfig) {
    console.log('CONFIG:'+JSON.stringify(config));
    if (config.allCustomObjects) {
      let instructions: QueryDefinition = plainToClass(QueryDefinition, {
        Name: 'DescribeGlobal',
        Type: Type.DESCRIBE,
        Expression: {
          Query: 'SObject:*'
        },
        ExcludeNamespaces: config.excludeNamespaces
      }); 
      config.objects = await this.apiManager.execute(instructions);
      console.log('OBJECTS:'+JSON.stringify(config.objects));
    }
  }
}  

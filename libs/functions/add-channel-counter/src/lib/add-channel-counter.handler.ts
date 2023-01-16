import * as admin from "firebase-admin";

import { uuidv4 } from "@firebase/util";

import { HandlerTools, Repository } from '@iote/cqrs';
import { Query } from '@ngfi/firestore-qbuilder';
import { FunctionHandler, HttpsContext } from '@ngfi/functions';

import { Shards } from "./models/shards.interface";

export class AddChannelCounter extends FunctionHandler<{ orgId: string; }, any>
{
  shardsRepo: Repository<Shards>;

  public async execute(payload: { orgId: string; }, context: HttpsContext, tools: HandlerTools) 
  {
    const docRef = `channels/shards/${payload.orgId}`;

    this.shardsRepo = tools.getRepository<Shards>(docRef)

    await this.incrementCounter();

    return this.getCounter();
  }

  async getCounter()
  {

    const documents = await this.shardsRepo.getDocuments(new Query());

    let count = 0;
    for (const doc of documents) {
      count += doc.count as any;
    }
    return count;
  }

  async incrementCounter()
  {
    const shardId = uuidv4();
    const count = admin.firestore.FieldValue.increment(1)
    
    return this.shardsRepo.write({ count }, shardId.toString());
  }
}
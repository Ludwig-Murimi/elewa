import { FieldValue } from "@firebase/firestore-types";

import { IObject } from "@iote/bricks";

export interface Shards extends IObject {
  count: FieldValue
}

import {Realm} from '@realm/react';

export class Daily extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  text!: string;
  createdAt!: Date;

  static generate(title: string, text: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      text,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'Daily',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      text: 'string',
      createdAt: 'date',
    },
  };
}

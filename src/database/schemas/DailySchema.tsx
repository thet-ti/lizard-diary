import {Realm} from '@realm/react';

export class DailySchema extends Realm.Object {
  static schema = {
    name: 'Daily',
    properties: {
      _id: {type: 'uuid', default: () => new Realm.BSON.UUID()},
      title: 'string?',
      body: 'string?',
      createdAt: {type: 'date', default: () => new Date()},
    },
    primaryKey: '_id',
  };
}

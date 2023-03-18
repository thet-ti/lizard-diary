import {createRealmContext} from '@realm/react';
import {DailySchema} from '../database/schemas/DailySchema';

export const RealmContext = createRealmContext({
  schema: [DailySchema],
  deleteRealmIfMigrationNeeded: true,
});

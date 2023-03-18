import React from 'react';
import {createContext} from 'react';
import {useCallback} from 'react';
import {DailySchema} from '../database/schemas/DailySchema';
import {RealmContext} from './RealmContext';

interface IDailyProviderProps {
  children: React.ReactNode;
}

interface IDailyContextData {
  dailies: Realm.Results<DailySchema>;
  createDaily: ({title, body}: IDaily) => void;
}

interface IDaily {
  title?: string;
  body?: string;
}

export const DailyContext = createContext({} as IDailyContextData);

export const DailyProvider = ({children}: IDailyProviderProps) => {
  const {useQuery, useRealm} = RealmContext;

  const realm = useRealm();
  const dailies = useQuery(DailySchema);

  const createDaily = useCallback(
    ({title, body}: IDaily) => {
      realm.write(() => {
        realm.create<DailySchema>(DailySchema.schema.name, {
          title,
          body,
        });
      });
    },
    [realm],
  );

  return (
    <DailyContext.Provider
      value={{
        dailies,
        createDaily,
      }}>
      {children}
    </DailyContext.Provider>
  );
};

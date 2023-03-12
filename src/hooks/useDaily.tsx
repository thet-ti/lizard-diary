import React, {useState, useEffect, useRef, useContext} from 'react';
import {Realm} from '@realm/react';
import {Daily} from '../database/model/Daily';

const DailyContext = React.createContext<IDailyContextProps | null>(null);

interface IDailyProviderProps {
  children: React.ReactNode;
}

interface IDailyContextProps {
  dailies: Daily[];
  createDaily: (daily: {title: string; text: string}) => void;
  updateDaily: (daily: Daily) => void;
  deleteDaily: (daily: Daily) => void;
}

export const DailyProvider = ({children}: IDailyProviderProps) => {
  const [dailies, setDailies] = useState<Daily[]>([]);

  const realmRef = useRef<Realm | null>(null);

  useEffect(() => {
    const realmConfig = {
      schema: [Daily.schema],
    };

    Realm.open(realmConfig).then((realm: Realm) => {
      realmRef.current = realm;

      const foundDailies = realm.objects<Daily>('Daily').sorted('createdAt');
      setDailies([...foundDailies]);
      foundDailies.addListener(() => {
        setDailies([...foundDailies]);
      });
    });

    return () => {
      const realm = realmRef.current;

      if (realm) {
        realm.close();
        realmRef.current = null;
        setDailies([]);
      }
    };
  });

  const createDaily = (daily: {title: string; text: string}) => {
    const realm = realmRef.current;
    realm?.write(() => {
      realm.create<Daily>('Daily', Daily.generate(daily.title, daily.text));
    });
  };

  const updateDaily = (daily: Daily) => {
    const realm = realmRef.current;
    realm?.write(() => {
      daily;
    });
  };

  const deleteDaily = (daily: Daily) => {
    const realm = realmRef.current;
    realm?.write(() => {
      realm.delete(daily);
      setDailies([...realm.objects<Daily>('Daily').sorted('createdAt')]);
    });
  };

  return (
    <DailyContext.Provider
      value={{
        createDaily,
        updateDaily,
        deleteDaily,
        dailies,
      }}>
      {children}
    </DailyContext.Provider>
  );
};

export const useDaily = () => {
  const task = useContext(DailyContext);
  if (task == null) {
    throw new Error('useDaily() called outside of a TasksProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return task;
};

import {useContext} from 'react';
import {DailyContext} from '../contexts/DailyContext';

export const useDaily = () => useContext(DailyContext);

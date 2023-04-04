import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es';

dayjs.locale('es');
dayjs.extend(utc);

export const day = dayjs;

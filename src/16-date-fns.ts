import { subDays, format } from 'date-fns';

const date = new Date(1998, 4, 11);
const rta = subDays(date, 1);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);


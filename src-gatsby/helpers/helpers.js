import { orderBy } from 'lodash';
import moment from 'moment';

export const sortArrayByDate = (arr) => {
  const sortedArr = orderBy(
    arr,
    (item) => {
      return moment(item.date).format('YYYYMMDD');
    },
    ['desc'],
  );
  return sortedArr;
};

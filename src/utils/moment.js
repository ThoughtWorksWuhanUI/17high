import moment from 'moment';

export function localMoment(...args) {
  moment.locale('zh-cn');
  return moment.apply(this, args);
}

export function smartMoment(...args) {
  if (localMoment(args).isBefore(new Date)) {
    return localMoment(args).fromNow();
  }
  return moment(...args).format('YYYY年 M月D号 dddd h:mm:ss a');
}

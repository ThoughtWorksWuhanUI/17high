import moment from 'moment';

export function localeMoment(...args) {
  moment.locale('zh-cn');
  return moment(...args);
}

export function smartMoment(...args) {
  localeMoment(...args);
  if (moment(...args).isBefore(moment())) {
    return moment.apply(this, args).fromNow();
  }
  return moment(...args).format('YYYY-MM-DD(dddd) a h:mm:ss');
}

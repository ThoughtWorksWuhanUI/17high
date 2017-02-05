import { localeMoment, smartMoment } from '../moment';

describe('moment', () => {
  it('localeMoment', () => {
    expect(localeMoment('2017-12-31').format('YYYY-MM-DD')).toEqual('2017-12-31');
  });

  // This is a test based on Time, so, maybe failed after a period of time
  it('smartMoment', () => {
    expect(smartMoment('2017-12-31', 'YYYY-MM-DD')).toEqual('2017-12-31(星期日) 凌晨 12:00:00');
    expect(smartMoment('2015-12-31', 'YYYY-MM-DD')).toEqual('1 年前');
  });
});

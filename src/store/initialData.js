import determineBonus from './determineBonus';
import Immutable from 'immutable';

const seq = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

var rows = seq.map(r => {
  return {
    columns: seq.map(c => {
      return {
        bonus: determineBonus(r, c)
      };
    })
  };
});

const data = {
    rows: rows
};

var mappedData = Immutable.fromJS(data);

console.log(mappedData.get('rows'));

export default mappedData;

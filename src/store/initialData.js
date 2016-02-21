import determineBonus from './determineBonus';
import Immutable from 'immutable';
import { Map } from 'immutable';

var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);

const seq = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

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

var mappedData = Immutable.Map(data);

console.log(mappedData.get('rows'));

export default mappedData;

import determineBonus from './determineBonus';
import Immutable from 'immutable';

const seq = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const rows = seq.map(r => {
  return {
    columns: seq.map(c => {
      return {
        bonus: determineBonus(r, c)
      };
    })
  };
});

const selection = {
  start: null,
  end: null
};

const data = {
    rows: rows,
    selection: selection
};

data.rows[1].columns[3].tile= { letter: "s", score: "1" };
data.rows[1].columns[4].tile= { letter: "a", score: "1" };
data.rows[1].columns[5].tile= { letter: "n", score: "1" };
data.rows[1].columns[6].tile= { letter: "d", score: "1" };
data.rows[1].columns[7].tile= { letter: "y", score: "1" };

data.rows[0].columns[5].tile= { letter: "u", score: "1" };
data.rows[2].columns[5].tile= { letter: "d", score: "1" };
data.rows[3].columns[5].tile= { letter: "e", score: "1" };
data.rows[4].columns[5].tile= { letter: "r", score: "1" };
data.rows[5].columns[5].tile= { letter: "s", score: "1" };
data.rows[6].columns[5].tile= { letter: "t", score: "1" };
data.rows[7].columns[5].tile= { letter: "a", score: "1" };
data.rows[8].columns[5].tile= { letter: "n", score: "1" };
data.rows[9].columns[5].tile= { letter: "d", score: "2" };

data.rows[7].columns[6].tile= { letter: "r", score: "1" };
data.rows[7].columns[7].tile= { letter: "c", score: "1" };
data.rows[7].columns[8].tile= { letter: "t", score: "1" };
data.rows[7].columns[9].tile= { letter: "i", score: "1" };
data.rows[7].columns[10].tile= { letter: "c", score: "1" };

var mappedData = Immutable.fromJS(data);

console.log(mappedData.get('rows'));

export default mappedData;

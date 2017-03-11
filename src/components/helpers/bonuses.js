import * as bonuses from '../../common/bonuses';

export const getColour = bonus => {
    switch (bonus) {
        case bonuses.START:
            return 'rgb(255,190,173)';
        case bonuses.TRIPLE_WORD:
            return 'rgb(255,105,82)';
        case bonuses.DOUBLE_WORD:
            return 'rgb(255,190,173)';
        case bonuses.TRIPLE_LETTER:
            return 'rgb(57,162,181)';
        case bonuses.DOUBLE_LETTER:
            return 'rgb(198,215,214)';
        default:
            return 'rgb(214,203,173)';
    }
}

export const getCaption = bonus => {
    switch (bonus) {
        case bonuses.START:
            return '';
        case bonuses.TRIPLE_WORD:
            return 'TRIPLE WORD SCORE';
        case bonuses.DOUBLE_WORD:
            return 'DOUBLE WORD SCORE';
        case bonuses.TRIPLE_LETTER:
            return 'TRIPLE LETTER SCORE';
        case bonuses.DOUBLE_LETTER:
            return 'DOUBLE LETTER SCORE';
        default:
            return '';
    }
}
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('generateAuralUpdate', () => {
    const action = generateAuralUpdate();
    it('Should return the action', () => {
        expect(action.type).toEqual('GENERATE_AURAL_UPDATE');
    })
})

describe('restartGame', () => {
    const action = restartGame(72);
    it('Should return the action', () => {
        expect(action.type).toEqual('RESTART_GAME');
        expect(action.correctAnswer).toEqual(72)
    })

})

describe('makeGuess', () => {
    const action = makeGuess(49);
    it('Should return the action', () => {
        expect(action.type).toEqual('MAKE_GUESS');
        expect(action.guess).toEqual(49)
    })
})
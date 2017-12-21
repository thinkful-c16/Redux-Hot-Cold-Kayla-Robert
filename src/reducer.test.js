import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('test initial state', ()=>{
    it('should return the initial state', ()=>{
        const newState = reducer(undefined, {});
        expect(newState.guesses).toEqual([]);
        expect(newState.feedback).toEqual('Make your guess!');
        expect(newState.auralStatus).toEqual('');
        expect(newState.correctAnswer).toBeGreaterThan(0);
        expect(newState.correctAnswer).toBeLessThan(101);
    })
})

describe('test restart game', ()=>{
    it('should reset state to initial state on new game action', ()=>{
        const action = 'RESTART_GAME';
        const newState = reducer(undefined, action);
        expect(newState.guesses).toEqual([]);
        expect(newState.feedback).toEqual('Make your guess!');
        expect(newState.auralStatus).toEqual('');
        expect(newState.correctAnswer).toBeGreaterThan(0);
        expect(newState.correctAnswer).toBeLessThan(101);
    })
})

describe('test make guess', ()=>{
    it('should add a new number to guesses array', ()=>{
        const action = 'MAKE_GUESS';
        const newGuess = 55;
        const newState = reducer(undefined, makeGuess(newGuess));
        expect(newState.guesses).toEqual([newGuess]);
    })
})

describe('test feedback', ()=>{
    it('should give appropriate feedback based on last guess', ()=>{
        const action = 'MAKE_GUESS';
        const newGuess = 55;
        const newState = reducer(undefined, makeGuess(newGuess));
        expect(newState.feedback).not.toBe('');
    })
})

describe('test Aural Update', ()=>{
    it('should give appropriate feedback based on last guess, to text readers', ()=>{
        const action = 'GENERATE_AURAL_UPDATE';
        console.log(action);
        const newGuess = 55;
        const newState = reducer({
            guesses: [55, 30],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 60
        }, generateAuralUpdate());
        expect(newState.auralStatus).toBe('Here\'s the status of the game right now: Make your guess! You\'ve made 2 guesses. In order of most- to least-recent, they are: 30, 55');
    })
})


import reducer from './reducer';

describe('test initial state', ()=>{
    it('should return the initial state', ()=>{
        expect (reducer(undefined, {})).toBe(
            reducer.guesses, [],
        )
    })
})
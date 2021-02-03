const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type : INCREASE});
export const decrase = () => ({type : DECREASE});

const initalState = {
    number : 0
};

function counter(state = initalState, action){
    switch(action.type){
        case INCREASE : 
            return{
                state.number + 1
            };
        case DECREASE : 
            return{
                state.number -1
            };
        default:
            return state;
    }
}

export default counter;
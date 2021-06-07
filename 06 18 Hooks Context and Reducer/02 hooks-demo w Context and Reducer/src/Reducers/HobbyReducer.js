import uuid from 'uuid';

export const ADD_HOBBY = 'ADD_HOBBY';
export const REMOVE_HOOBY = 'REMOVE_HOOBY';

export const HobbyReducer = (state, action) => {
    switch (action.type) {
        case ADD_HOBBY:
            let newHobby = {
                id: uuid(),
                name: action.hobby.name,
                times: action.hobby.times,
                icon: ['Flight', 'Music', 'Another', 'Sport'][Math.floor(Math.random() * 4)]
            };
            return [...state, newHobby];
        case REMOVE_HOOBY:
            return state.filter(hobby => hobby.id !== action.id);
        default:
            return state;
    }
}

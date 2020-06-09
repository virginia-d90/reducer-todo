export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]
// export const initialState = {
//     todos:[
//         {
//             item: 'Learn about reducers',
//             completed: false,
//             id: 3892987589,
//         }
//     ]
// }

export const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE_TODOLIST":
            return[
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }
            ]
        case "TOGGLE_COMPLETED":
            return state.map((item) => {
                if (item.id === action.payload){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }
            })
            
        default:
            return state;
    }
}
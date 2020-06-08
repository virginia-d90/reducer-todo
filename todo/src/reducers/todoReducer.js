export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE_TODOLIST":
            return[
                ...state,
                {
                    item: action.payload,
                    id: Date.now(),
                }
            ]
        case "TOGGLE_COMPLETED":
            return state.map((item) => {
                if (item.id === action.todo.id){
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
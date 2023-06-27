export const cartInitialState = {
    items:[],
    isOpen:false,
}

export const cartReducer = (state, action)=>{
    // console.log("action",action)
    // console.log("state.items", state.items)
    switch (action.type){
        case "ADD_CART_ITEM":
            // return{...state, items:action.payload};
            // return{...state, items: state.items.concat(action.payload)};
            // return{...state, items: [...state.items,action.payload]};
            return{...state, items: action.payload};

          
            case "TOGGLE_CART":
                return{
                    ...state,
                    // isOpen: action.payload
                    isOpen: !state.isOpen,
                }
                case "DELETE_CART_ITEM":
                    return{
                        ...state,
                        // isOpen: action.payload
                        items: state.items.filter((item)=>item.record._id !== action.payload)
                    }
    
               
            default:return state;
    }
   
}
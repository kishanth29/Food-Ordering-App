let defaultState = {
    selectedItems: {
        items: [],
        resturantName: "",
        resturantImage: "",
        resturantAddress: "",
        quantity: {},
        total: {}
    },
    selectedOrderItems: {
        items: [],
        resturantName: "",
        resturantImage: "",
        resturantAddress: "",
        quantity: {},
        total: {}
    }
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET": {
            const newState = { ...state };
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                resturantName: action.payload.resturantName,
                resturantImage: action.payload.resturantImage,
                resturantAddress: action.payload.resturantAddress,
                quantity: action.payload.quantity,
                total: action.payload.total
            };
            return newState;
        }
        case "ADD_THE_ORDER": {
            const newState = { ...state };
            newState.selectedOrderItems = {
                items: [...newState.selectedOrderItems.items, action.payload],
                resturantName: action.payload.resturantName,
                resturantImage: action.payload.resturantImage,
                resturantAddress: action.payload.resturantAddress,
                quantity: action.payload.quantity,
                total: action.payload.total
            };
            return newState;
        }
        default:
            return state;
    }
};

export default cartReducer;
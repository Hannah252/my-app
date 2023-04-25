

const initialState = {
    item: [
      { id: 1, name: 'Hannah', mobile: 8610890636 },
      { id: 2, name: 'akhi', mobile: 9867545336 },
      { id: 3, name: 'dhivya', mobile: 75764564533 }
    ]
  };
  
  function ItemsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_INTERN':
        return{
                ...state,
                interns: state.item.concat(action.payload)
            };
  
      case 'DELETE_ITEM':
        return {
          ...state,
          item: state.item.filter((item) => item.id !== action.payload)
        };
  
      case 'EDIT_ITEM':
        if (!Array.isArray(state.item)) {
          return state;
        }
  
        return {
          ...state,
          item: state.item.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, name: action.payload.name };
            } else {
              return item;
            }
          })
        };
  
      default:
        return state;
    }
  }
  
  export default ItemsReducer;
  
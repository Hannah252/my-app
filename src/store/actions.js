export function addItem(item) 
{ 
    return (dispatch) => { 
        dispatch(
            {type: 'ADD_ITEM', payload: item}
        ) 
    } 
} 

export function deleteItem(id) 
{ 
    return (dispatch) => { 
        dispatch( 
            { type: 'DELETE_ITEM', payload: id } 
        ) 
    }
} 

export function editItem(id, name) 
{ 
    return (dispatch) => { 
        dispatch( 
            { type: 'EDIT_ITEM', payload: { id, name } }
        )
    }
}

// export * as actionCreators from './actions'



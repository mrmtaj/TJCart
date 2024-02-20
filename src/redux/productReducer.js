
export const productReducer = (state, action) => {
  switch (action.type) {
        case 'SORT_BY_PRICE':
            return {...state, sort: action.payload }
            break;
        case 'SEARCH_BY_QRY':
            return {...state, searchQry: action.payload }
        default:
                return state;
            break;
  }
}



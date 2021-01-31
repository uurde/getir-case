import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, LOAD_ITEMS, FILTER_BY_TYPE, LOAD_NEW_PAGE, LOAD_BRANDS } from '../actions/action-types/index-actions'


const initState = {
    items: [],
    addedItems: [],
    total: 0,
    brands:[]

}
const index = (state = initState, action) => {
    switch (action.type) {
        case LOAD_ITEMS:
            return {
                ...state,
                items: action.items
            }
        case LOAD_BRANDS:
            return {
                ...state,
                brands: action.brands
            }
        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.slug === action.payload)
            let existed_item = state.addedItems.find(item => action.payload === item.slug)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                addedItem.quantity = 1;
                let addedTotal = state.total + addedItem.price
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: addedTotal
                }

            }
        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)
            let removedTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return {
                ...state,
                addedItems: new_items,
                total: removedTotal
            }
        case ADD_QUANTITY:
            let addedQuantity = state.items.find(item => item.id === action.id)
            addedQuantity.quantity += 1
            let addedQuantityTotal = state.total + addedQuantity.price
            return {
                ...state,
                total: addedQuantityTotal
            }
        case SUB_QUANTITY:
            let subedQuantity = state.items.find(item => item.id === action.id)
            if (subedQuantity.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.payload)
                let subedTotal = state.total - subedQuantity.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: subedTotal
                }
            }
            else {
                subedQuantity.quantity -= 1
                let subedTotal = state.total - subedQuantity.price
                return {
                    ...state,
                    total: subedTotal
                }
            }
        case FILTER_BY_TYPE:
            let newState = Object.assign({}, state);
            let value = action.payload.value;
            let filteredValues = state.items.filter(product => {
                return product.itemType.toLowerCase().includes(value);
            });
            let appliedFilters = state.appliedFilters;
            if (value) {
                appliedFilters = addFilterIfNotExists(FILTER_BY_TYPE, appliedFilters);

                newState.filteredProducts = filteredValues;
                newState.filteredCount = newState.filteredProducts.length;
                newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);

            } else {
                appliedFilters = removeFilter(FILTER_BY_TYPE, appliedFilters);

                if (appliedFilters.length === 0) {
                    newState.filteredProducts = newState.products;
                    newState.filteredCount = newState.filteredProducts.length;
                    newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);
                }
            }
            return newState;
        default:
            return state;
    }
}

export default index;

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    })
}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}

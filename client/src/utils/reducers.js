// Import the defined actions
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  ADD_PROPERTY,
  UPDATE_PROPERTY,
  UPDATE_PROPERTIES,
  REMOVE_PROPERTY,
  QUERY_PROPERTIES,
  QUERY_CHECKOUT,
} from "./actions";

// Create the initial state for Redux
const initialState = {
  users: [],
  tenants: [],
  properties: [],
  currentProperty: {},
  currentUser: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // If action type value is the value of `ADD_USER`, return a new state object with an updated owner array
    case ADD_USER:
      return {
        ...state, // the 'spread' operator
        users: [...action.users],
      };

    case UPDATE_USER:
      return {
        ...state, // the 'spread' operator
        currentUser: { ...action.currentUser },
      };

    case REMOVE_USER:
      return {
        ...state,
        users: [...action.users],
      };
    // If action type value is the value of `ADD_PROPERTIES`, return a new state object with an updated properties array
    case ADD_PROPERTY:
      return {
        ...state,
        property: [...action.property],
      };
    // If action type value is the value of `UPDATE_PROPERTY`, return a new state object with an updated properties array
    case UPDATE_PROPERTY:
      let newPropertiesArr = [];

      for (let i = 0; i < action.properties.length; i++) {
        if (action.properties[i]._id != action.updatedProperty._id) {
          newPropertiesArr.push(action.properties[i]);
        } else {
          newPropertiesArr.push(action.updatedProperty);
        }
      }

      return {
        ...state,
        properties: newPropertiesArr,
      };
    case UPDATE_PROPERTIES:
      return {
        ...state,
        properties: [...action.properties],
      };

    // If action type value is the value of `REMOVE_PROPERTIES`, return a new state object with an updated properties array
    case REMOVE_PROPERTY:
      return {
        ...state,
        property: [...action.property],
      };

    case QUERY_PROPERTIES:
      return {
        ...state,
        property: [action.properties],
      };

    // If action type value is the value of `QUERY_CHECKOUT`, return a new state object with an updated properties array
    case QUERY_CHECKOUT:
      return {
        ...state,
        property: [...action.property],
      };

    // If it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

// Export the default reducer for Redux.
export default reducer;

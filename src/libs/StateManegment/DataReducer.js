import { formModel } from "../Component/Models/formModel";
import {
  ADD_DATA,
  DELETE_DATA,
  EDIT_DATA,
  GET_DATA,
  SuccessAddData,
  SUCCESS_ADD,
} from "./DataAction";
import store from "./Store";

const initialValue = {
  loading: false,
  formData: [],
  viewData: {},
  editMode:false
};

export const DataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_DATA:
      const form = new formModel();
      form.setValues(action.formData);
      state.formData.push(form);
      state = { ...state, loading: true };

      setTimeout(
        () => store.dispatch({ type: SUCCESS_ADD, callBack: action.callBack }),
        1000
      );

      return state;

    case SUCCESS_ADD:
      state = { ...state, loading: false };
      action.callBack();
      return state;

    case DELETE_DATA:
      state.formData.splice(action.index);
      state = { ...state };
      console.log(state);
      return state;

    case GET_DATA:
        console.log(1);
      state.viewData = state.formData[action.index];
      return {...state,editMode:true};

      case EDIT_DATA:
        const form2 = new formModel();
        form2.setValues(action.formData);
        state.formData[form2.key]=form2;
        state = { ...state, loading: true };
  
        setTimeout(
          () => store.dispatch({ type: SUCCESS_ADD, callBack: action.callBack }),
          1000
        );
  
        return state;
      
    default:
      return state;
  }
};

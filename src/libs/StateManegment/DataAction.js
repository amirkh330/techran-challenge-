export const ADD_DATA = "ADD_DATA";
export const FIELD_ADD = "FIELD_ADD";
export const SUCCESS_ADD = "SUCCESS_ADD";
export const DELETE_DATA = "DELETE_DATA";
export const GET_DATA = "GET_DATA";
export const EDIT_DATA = "EDIT_DATA";

export const AddData = (formData,callBack)=>async(dispatch)  =>  {

    
        dispatch({ type: ADD_DATA,formData,callBack });      
    
  
};

export const EditData = (formData,index,callBack)=>async(dispatch)  =>  {
        dispatch({ type: EDIT_DATA,formData,index,callBack });      
};


export const DeleteUser=(index)=>async (dispatch)=>{
   dispatch({type:DELETE_DATA,index})
}


export const getData=(index)=>async (dispatch)=>{
   dispatch({type:GET_DATA,index})
}
import React, { useEffect, useState } from 'react'
import EditForm from '../../Form/EditForm';
import NewForm from '../../Form/NewForm'
import ViewForm from '../../Form/ViewForm';
import { getData } from '../../StateManegment/DataAction';
import store from '../../StateManegment/Store';

export default function Form(props) {

  let [disable, setDisable] = useState(false);
  const query = new URLSearchParams(props.location.search);
  const status = query.get("status");
  const id = query.get("id");
  id && store.dispatch(getData(id));

  useEffect(() => {
    status && status === "view" && setDisable(true);
  }, []);
  

const _renderView=()=>{
  if(status=== "view"){return <ViewForm disable={disable}/>}
  if(status=== "edit"){return <EditForm id={id}/>}
  return <NewForm/>
}

  return (
    <div className={"p-3"}>
      {_renderView()}    
    </div>
  )
}

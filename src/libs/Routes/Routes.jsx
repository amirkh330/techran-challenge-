import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Form from "../Page/Form/Form";
import Table from "../Page/Table/DataTable";

export default function Routes() {
  return (
    <Switch>
      <Route  path="/form" component={Form} />
      <Route path="/table" component={Table} />
      <Redirect to="/form" />
    </Switch>
  );
}

import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Form from "../Form/Form";
import Table from "../Table/DataTable";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/form" component={Form} />
      <Route path="/table" component={Table} />
      <Redirect to="/form" />
    </Switch>
  );
}

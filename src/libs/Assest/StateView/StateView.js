import { Spin,Empty } from "antd";
import React, { Fragment } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function StateView({ state, children }) {
  
    const renderLoading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;
    return (
      <div className={"d-flex justify-content-center my-5"}>
        <Spin indicator={antIcon} size={"large"} tip={"Please Wait..."} />
      </div>
    );
  };

  const renderContent = () => {
    return <div className={""}>{children}</div>;
  };

  const renderError = () => {
    return (
      <div className={""}>
        <Empty />
      </div>
    );
  };

  const _renderView = (state) => {  
    switch (state) {
      case 1:
        return renderLoading();
      case 2:
        return renderError();
      case 3:
        return renderContent();
      default:
        return renderLoading();
    }
  };



  return <Fragment>{_renderView(state)}</Fragment>;
}

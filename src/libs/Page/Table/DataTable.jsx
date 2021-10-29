import React, { useEffect } from "react";
import { Popconfirm, Spin, Table } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import store from "../../StateManegment/Store";
import { DeleteUser } from "../../StateManegment/DataAction";
import { Link } from "react-router-dom";

export default function DataTable() {

  const { formData } = useSelector((st) => st);  

  

  const deleteUser = ({ key }) => {
    store.dispatch(DeleteUser(key));
  };

  const dataSource =
    formData &&
    formData.map((item, index) => {
      return { ...item, key: index };
    });

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Job",
      dataIndex: "jobTitle",
    },
    {
      title: "work Type",
      dataIndex: "workType",
    },
    {
      title: "View",
      key: "view",
      width: "5%",
      render: (data) => {
        return (
          <div className={"cursor p-1"}>
            <Link to={`/form?status=view&id=${data.key}`}>
              <EyeOutlined />
            </Link>
          </div>
        );
      },
    },
    {
      title: "Edit",
      key: "edit",
      width: "5%",
      render: (data) => {
        return (
          <div className={"cursor p-1"}>
            <Link to={`/form?status=edit&id=${data.key}`}>
            <EditOutlined />
            </Link>
          </div>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      width: "5%",
      render: (data) => {
        return (
          <div className={"cursor p-1"}>
            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => deleteUser(data)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="p-3 table-responsive ">
        {formData ? (
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ hideOnSinglePage: true }}
          />
        ) : (
          <div className="d-flex justify-content-center my-3">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
}

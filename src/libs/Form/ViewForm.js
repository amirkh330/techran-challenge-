import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { Select, Input, DatePicker, Radio, Checkbox, Button } from "antd";
import moment from "moment";
import store from "../StateManegment/Store";
import { AddData, ADD_DATA, EditData, getData } from "../StateManegment/DataAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { _renderValidation } from "../Assest/Validation/Validation";
import { TypeOption } from "../Assest/Data/TypeOption";
import { JobOption } from "../Assest/Data/JobOption";
import { CityOption } from "../Assest/Data/CityOption";
import { CountryOption } from "../Assest/Data/CountryOption";

const { Option } = Select;
const { TextArea } = Input;




export default function ViewForm({disable}) {
  



  const { viewData} = useSelector((st) => st);
  const optionCountry = [
    { label: "Iran", value: "iran" },
    { label: "India", value: "india" },
    { label: "Italy", value: "italy" },
    { label: "Iraq", value: "iraq" },
    { label: "Ireland", value: "ireland" },
  ];

  const history = useHistory();

  
  const formik = useFormik({
    initialValues: viewData ,
  });

  const callBack = () => {
    setTimeout(() => history.push("/table"), 50);
  };

  
  return (
    <div className={"p-3"}>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>User Name:</label>
            </div>
            <Input
              type="text"
              name="firstName"
              disabled={disable}
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>Last Name:</label>
            </div>
            <Input
              type="text"
              name="lastName"
              disabled={disable}
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
           
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>Age:</label>
            </div>
            <Input
              type="number"
              name="age"
              disabled={disable}
              placeholder="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
           
          </div>

          <div className="col-12 col-md-6 p-2">
            <div id="my-radio-group">Gender:</div>
            <Radio.Group
              name="gender"
              disabled={disable}
              className={"mt-1"}
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
            
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
              <label>BirthDay:</label>
            </div>
            <DatePicker
              name="birthday"
              placeholder="Birthday"
              disabled={disable}
              onChange={(e, value) => formik.setFieldValue("birthday", e)}
              onBlur={formik.handleBlur}
              value={moment(formik.values.birthday)}
            />
          
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
              <label>Country :</label>
            </div>
            <Select
              name="country"
              placeholder="Country"
              disabled={disable}
              onChange={(value) => formik.setFieldValue("country", value)}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            >
              {CountryOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
            </Select>

            {/* <ErrorMessage name="country" /> */}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
              <label>City :</label>
            </div>
            <Select
              name="city"
              placeholder="City"
              disabled={disable}
              onChange={(value) => formik.setFieldValue("city", value)}
              onBlur={formik.handleBlur}
              defaultValue={formik.values.city}
          >
{CityOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
          </Select>

            {/* <ErrorMessage name="country" /> */}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
              <label>Job Title :</label>
            </div>
            <Select
              name="jobTitle"
              disabled={disable}
              placeholder="job Title"
              onChange={(value) => formik.setFieldValue("jobTitle", value)}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
            >
               {JobOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
            </Select>

            {/* <ErrorMessage name="country" /> */}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>Phone Number:</label>
            </div>
            <Input
              type="number"
              name="phone"
              disabled={disable}
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {/* <ErrorMessage name="age" /> */}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>Work Type:</label>
            </div>
            <Checkbox.Group
              name="workType"
              className={"mt-1"}
              options={TypeOption}
              disabled={disable}
              onChange={(value) => formik.setFieldValue("workType", value)}
              value={formik.values.workType}
            />
            {/* <ErrorMessage name="age" /> */}
          </div>
          
          <div className="col-12  p-2">
            <div>
              <label>Description:</label>
            </div>
            <TextArea
              rows={5}
              style={{ width: "90%" }}
              name="description"
              disabled={disable}
              placeholder="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
        
          </div>
        </div>

    <Link to={"/table"}>
          <Button type={"primary"} className={"radius"}>
            Go Back
          </Button>
        </Link>
      </form>
      
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { Select, Input, DatePicker, Radio, Checkbox, Button, InputNumber } from "antd";
import moment from "moment";
import store from "../StateManegment/Store";
import { AddData, ADD_DATA, EditData, getData } from "../StateManegment/DataAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { _renderValidation } from "../Assest/Validation/Validation";
import { _renderInitialValue } from "../Assest/InitioalValues/_renderInitialValue";
import { CountryOption } from "../Assest/Data/CountryOption";
import { CityOption } from "../Assest/Data/CityOption";
import { JobOption } from "../Assest/Data/JobOption";
import { TypeOption } from "../Assest/Data/TypeOption";
import _renderLabel from "../Assest/Title/_renderLabel";

const { Option } = Select;
const { TextArea } = Input;




export default function EditForm({id}) {
  

  const { viewData, loading } = useSelector((st) => st);



  const history = useHistory();

  
  const formik = useFormik({
    initialValues: viewData?viewData:_renderInitialValue ,
    onSubmit: (data) => store.dispatch(EditData(data,id, callBack)),
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
            {_renderLabel('First Name')}
            </div>
            <Input
              type="text"
              name="firstName"            
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
           {formik.errors.firstName && <span className={"d-flex text-danger"}>{formik.errors.firstName}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
            {_renderLabel('Last Name')}
            </div>
            <Input
              type="text"
              name="lastName"             
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && <span className={"d-flex text-danger"}>{formik.errors.lastName}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
            {_renderLabel('Age')}
            </div>
            <InputNumber
              type="number"
              name="age"
              placeholder="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
           {formik.errors.age && <span className={"d-flex text-danger"}>{formik.errors.age}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div id="my-radio-group">
            <div id="my-radio-group">Gender:</div>
            </div>
            <Radio.Group
              name="gender"            
              className={"mt-1"}
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
            {formik.errors.gender && <span className={"d-flex text-danger"}>{formik.errors.gender}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('Birthday')}
            </div>
            <DatePicker
              name="birthday"
              placeholder="Birthday"             
              onChange={(e, value) => formik.setFieldValue("birthday", e)}
              onBlur={formik.handleBlur}
              value={moment(formik.values.birthday)}
            />
          {formik.errors.birthday && <span className={"d-flex text-danger"}>{formik.errors.birthday}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('Country')}
            </div>
            <Select
              name="country"
              placeholder="Country"              
              onChange={(value) => formik.setFieldValue("country", value)}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            >
              {CountryOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
            </Select>
            {formik.errors.country && <span className={"d-flex text-danger"}>{formik.errors.country}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('City')}
            </div>
            <Select
              name="city"
              placeholder="City"
              onChange={(value) => formik.setFieldValue("city", value)}
              onBlur={formik.handleBlur}
              defaultValue={formik.values.city}
          >
{CityOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
          </Select>
          {formik.errors.city && <span className={"d-flex text-danger"}>{formik.errors.city}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('Job Title')}
            </div>
            <Select
              name="jobTitle"
              placeholder="job Title"
              onChange={(value) => formik.setFieldValue("jobTitle", value)}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
            >
               {JobOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
            </Select>

            {formik.errors.jobTitle && <span className={"d-flex text-danger"}>{formik.errors.jobTitle}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
            {_renderLabel('Phone Number')}
            </div>
            <InputNumber
              type="number"
              name="phone"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.birthday && <span className={"d-flex text-danger"}>{formik.errors.phone}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
              <label>Work Type:</label>
            </div>
            <Checkbox.Group
              name="workType"
              className={"mt-1"}
              options={TypeOption}
              onChange={(value) => formik.setFieldValue("workType", value)}
              value={formik.values.workType}
            />
      
          </div>

          <div className="col-12  p-2">
            <div>
            {_renderLabel('Description')}
            </div>
            <TextArea
              rows={5}
              style={{ width: "90%" }}
              name="description"
             
              placeholder="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
         {formik.errors.description && <span className={"d-flex text-danger"}>{formik.errors.description}</span>}
          </div>
        </div>

        <Button
            className="radius btn-primary"
            type={"primary"}
            loading={loading}
            onClick={formik.handleSubmit}
          >
            Submit:
          </Button>
      </form>
    </div>
  );
}

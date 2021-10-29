import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { Select, Input, DatePicker, Radio, Checkbox, Button, InputNumber } from "antd";
import moment from "moment";
import store from "../StateManegment/Store";
import { AddData, ADD_DATA, EditData, getData } from "../StateManegment/DataAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import {_renderInitialValue} from "../Assest/InitioalValues/_renderInitialValue"
import { _renderValidation } from "../Assest/Validation/Validation";
import { CityOption } from "../Assest/Data/CityOption";
import { CountryOption } from "../Assest/Data/CountryOption";
import { JobOption } from "../Assest/Data/JobOption";
import { TypeOption } from "../Assest/Data/TypeOption";
import Title from "../Assest/Title/_renderLabel";
import _renderLabel from "../Assest/Title/_renderLabel";

const { Option } = Select;
const { TextArea } = Input;




export default function NewForm(props) {
    
  const { loading } = useSelector((st) => st);

  

  const history = useHistory();

  
  const formik = useFormik({
    initialValues: _renderInitialValue,
    validate:_renderValidation,
    onSubmit: (data) => store.dispatch( AddData(data, callBack)),
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
             {(formik.errors.firstName && formik.touched.firstName) && <span className={"d-flex text-danger"}>{formik.errors.firstName}</span>}
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
            {(formik.errors.lastName &&formik.touched.lastName) &&  <span className={"d-flex text-danger"}>{formik.errors.lastName}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
            {_renderLabel('Age')}
            </div>
            <Input
              type="number"
              name="age"
              placeholder="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {(formik.errors.age && formik.touched.age) && <span className={"d-flex text-danger"}>{formik.errors.age}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
          <div id="my-radio-group">Gender:</div>
            <Radio.Group
              name="gender"
              className={"mt-1"}
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
            {(formik.errors.gender &&formik.touched.gender )&& <span className={"d-flex text-danger"}>{formik.errors.gender}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('Birthday')}
            </div>
            <DatePicker
              name="birthday"
              placeholder="Birthday"
              onChange={(e) => formik.setFieldValue("birthday", e)}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
            />
          
          {(formik.errors.birthday && formik.touched.birthday) && <span className={"d-flex text-danger"}>{formik.errors.birthday}</span>}
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

            {(formik.errors.country && formik.touched.country) && <span className={"d-flex text-danger"}>{formik.errors.country}</span>}
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

          {(formik.errors.city && formik.touched.city )&& <span className={"d-flex text-danger"}>{formik.errors.city}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
            {_renderLabel('Job Title')}
            </div>
            <Select
              name="jobTitle"
              placeholder="Job Title"
              onChange={(value) => formik.setFieldValue("jobTitle", value)}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
            >
               {JobOption.map(opt=>{return <Option value={opt}>{opt}</Option>})}
            </Select>

            {(formik.errors.jobTitle && formik.touched.jobTitle) && <span className={"d-flex text-danger"}>{formik.errors.jobTitle}</span>}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div className="">
            {_renderLabel('Phone number')}
            </div>
            <Input
              type="number"
              name="phone"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
              {(formik.errors.phone &&formik.touched.phone )&& <span className={"d-flex text-danger"}>{formik.errors.phone}</span>}
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
             {(formik.errors.description &&formik.touched.description )&& <span className={"d-flex text-danger"}>{formik.errors.description}</span>}
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

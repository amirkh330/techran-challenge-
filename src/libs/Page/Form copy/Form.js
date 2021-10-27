import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { Select, Input, DatePicker, Radio, Checkbox, Button } from "antd";
import moment from "moment";
import store from "../../StateManegment/Store";
import { AddData, ADD_DATA, EditData, getData } from "../../StateManegment/DataAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { Link } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;

const _renderValidation = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Please Enter Your First Name.";
  }
  if (values.firstName !== /^[A-Za-z]+$/) {
    errors.firstName = "Please Enter Your First Name Correctly.";
  }
  if (!values.lastName) {
    errors.lastName = "Please Enter Your Last Name.";
  }
  if (values.lastName !== /^[A-Za-z]+$/) {
    errors.lastName = "Please Enter Your Last Name Correctly.";
  }
  if (!values.age) {
    errors.age = "Please Enter Your Age.";
  }
  if (!isNaN(values.age)) {
    errors.age = "Please Enter Your Age Correctly.";
  }
  return errors;
};

const _renderInitialValue = () => {
  return {
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    birthday: "",
    country: "",
    city: "",
    jobTitle: "",
    phone: "",
    workType: "",
    description: "",
  };
};

const optionCountry = [
  { label: "Iran", value: "iran" },
  { label: "India", value: "india" },
  { label: "Italy", value: "italy" },
  { label: "Iraq", value: "iraq" },
  { label: "Ireland", value: "ireland" },
];

const Form = (props) => {
  let [disable, setDisable] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const status = query.get("status");
    const id = query.get("id");
    id && store.dispatch(getData(id));

    status && status === "view" && setDisable(true);
  }, []);

  const { viewData, loading, editMode } = useSelector((st) => st);
  

  const history = useHistory();

  
  const formik = useFormik({
    initialValues: viewData ? viewData : _renderInitialValue,
    onSubmit: (data) => store.dispatch(editMode ?EditData(data, callBack) : AddData(data, callBack)),
  });

  const callBack = () => {
    setTimeout(() => history.push("/table"), 50);
  };

  const workTypeOptions = ["Part time", "Full time", "Freelancer"];
  const jobTypeOptions = ["Developer", "Seo", "Cto", "UI Designer", "DevOps"];
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
            {/* <ErrorMessage name="firstName" /> */}
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
            {/* <ErrorMessage name="lastName" /> */}
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
            {/* <ErrorMessage name="age" /> */}
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
            {/* <ErrorMessage name="gender" /> */}
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
          
            {/* <ErrorMessage name="birthday" /> */}
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
              options={optionCountry}
            />

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
              options={optionCountry}
            />

            {/* <ErrorMessage name="country" /> */}
          </div>

          <div className="col-12 col-md-6 p-2">
            <div>
              <label>Job Title :</label>
            </div>
            <Select
              name="jobTitle"
              placeholder="job Title"
              disabled={disable}
              onChange={(value) => formik.setFieldValue("jobTitle", value)}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
              options={optionCountry}
            />

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
              disabled={disable}
              className={"mt-1"}
              options={jobTypeOptions}
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
            {/* <ErrorMessage name="age" /> */}
          </div>
        </div>

        {!disable ? (
          <Button
            className="radius btn-primary"
            type={"primary"}
            loading={loading}
            onClick={formik.handleSubmit}
          >
            Submit:
          </Button>
        ) : (
          <Button type={"primary"} href={"/table"}>
            GO Back
          </Button>
        )}
      </form>
      {/* )} */}
      {/* </Formik> */}
    </div>
  );
};

const submitForm = (data) => {
  store.dispatch(AddData(data));
};

export default withRouter(Form);

import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./App.css";
const App = ({ values, errors, touched }) => (
  <div className="App">
    <div className="company-logo">
      <img src="../img/logo-desktop@3x.png" alt="company logo"/>
    </div>
    <div className="register-banner"> REGISTER </div>
    <div className="form-heading">
      Enter your information below for exclusive offers, promotions and savings.
    </div>
    <Form>
      <div className="form-fields">
        <div>
          <label
            className={touched.firstName && errors.firstName ? "error" : ""}
          >
            First Name *
          </label>
        </div>
        <div>
          <Field
            type="text"
            name="firstName"
            className={
              (touched.firstName && errors.firstName ? "error" : "") + " input "
            }
          />
        </div>
        <div>
          <label className={touched.lastName && errors.lastName ? "error" : ""}>
            Last Name *
          </label>
        </div>
        <div>
          <Field
            type="text"
            name="lastName"
            className={
              (touched.lastName && errors.lastName ? "error" : "") + " input "
            }
          />
        </div>
        <div>
          <label className={touched.email && errors.email ? "error" : ""}>
            Email Address *
          </label>
        </div>
        <div>
          <Field
            type="email"
            name="email"
            className={
              (touched.email && errors.email ? "error" : "") + " input "
            }
          />
        </div>
        <div>
          <label className={touched.password && errors.password ? "error" : ""}>
            Password *
          </label>
        </div>
        <div>
          <Field
            type="password"
            name="password"
            className={
              (touched.password && errors.password ? "error" : "") + " input "
            }
          />
        </div>
        <div>
          <label
            className={
              touched.confirmPassword && errors.confirmPassword ? "error" : ""
            }
          >
            Conform Password *
          </label>
        </div>
        <div>
          <Field
            type="password"
            name="confirmPassword"
            className={
              (touched.confirmPassword && errors.confirmPassword
                ? "error"
                : "") + " input "
            }
          />
        </div>
        <div>
          <label
            className={
              touched.birthMonth &&
              errors.birthMonth &&
              touched.birthDay &&
              errors.birthDay &&
              touched.birthYear &&
              errors.birthYear
                ? "error"
                : ""
            }
          >
            BirthDate *
          </label> 
          <div className="tooltip"> <img src="../img/ico-help-desktop@3x.png" alt="help"/>
            <span className="tooltiptext">We'll use this to send birthday bonus points.</span>
          </div>
        </div>
        <div>
          <Birthdate />
        </div>
        <div>
          <label className={touched.phone && errors.phone ? "error" : ""}>
            Phone Number *
          </label>
        </div>
        <div>
          <Field
            type="number"
            name="phone"
            className={
              (touched.phone && errors.phone ? "error" : "") + " input "
            }
          />
        </div>
        <div className="field">
          <div className="radio-label">
            <label> Country </label>
          </div>
          <div className="radio-group">
            <Field type="radio" name="country" checked={true} value="USA" />
            <span className="flag">
              <img src="../img/ic-usa-mobile@3x.jpg" alt="USA"/>
            </span>
            <Field type="radio" name="country" checked={false} value="CADANA" />
            <span className="flag">
              <img src="../img/ic-canada-mobile@3x.jpg" alt="CANADA"/>
            </span>
          </div>
        </div>

        <div>
          <label className={touched.zipcode && errors.zipcode ? "error" : ""}>
            Zipcode *
          </label>
        </div>
        <div>
          <Field
            type="text"
            name="zipcode"
            className={
              (touched.zipcode && errors.zipcode ? "error" : "") + " input "
            }
          />
        </div>
      </div>
      <div className="checkbox-group">
        <div className="field checkbox-field">
          <div className="ui checkbox">
            <Field
              type="checkbox"
              name="terms"
              checked={values.terms}
              className="error"
            />
            <label className={touched.zipcode && errors.zipcode ? "error" : ""}>
              Yes, I accept Term conditions and Privacy policy
            </label>
          </div>
        </div>
        <div className="field checkbox-field error">
          <div className="ui checkbox">
            <Field type="checkbox" name="offers" checked={values.offers} />
            <label>Yes, I did like to recieve news and special offers.</label>
          </div>
        </div>
      </div>
      <button className="ui button" type="submit">
        Register
      </button>
      <div id="errors" className="errors">
        <ul className="errors-list">
          {touched.firstName && errors.firstName && (
            <li>
              <p> Invalid First Name</p>
            </li>
          )}
          {touched.lastName && errors.lastName && (
            <li>
              <p> Invalid Last Name</p>
            </li>
          )}
          {touched.email && errors.email && (
            <li>
              <p> Invalid Email Address</p>
            </li>
          )}
          {touched.password && errors.password && (
            <li>
              <p> Invalid Password </p>
            </li>
          )}
          {touched.confirmPassword && errors.confirmPassword && (
            <li>
              <p> Passwords Don't Match</p>
            </li>
          )}
          {touched.birthMonth &&
            errors.birthMonth &&
            (touched.birthDay && errors.birthDay) &&
            (touched.birthYear && errors.birthYear) && (
              <li>
                <p>Invalid BirthDate</p>
              </li>
            )}
          {touched.phone && errors.phone && (
            <li>
              <p>Invalid Phone Number</p>
            </li>
          )}
          {touched.zipcode && errors.zipcode && (
            <li>
              <p> Invalid Zipcode</p>
            </li>
          )}
          {touched.terms && errors.terms && (
            <li>
              <p>You must accept terms & conditions and Policy</p>
            </li>
          )}
        </ul>
      </div>
    </Form>
  </div>
);

// birthday component

const Birthdate = () => {
  const Months = [];
  for (let i = 1; i <= 12; i++) {
    Months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const Days = [];
  for (let i = 1; i <= 30; i++) {
    Days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const Years = [];
  for (let i = 1950; i <= 2019; i++) {
    Years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="birthday">
      <Field component="select" name="birthMonth" className="select-field">
        <option key="month" value="">
          Month
        </option>
        {Months}
      </Field>
      <Field component="select" name="birthDay" className="select-field">
        <option key="day" value="">
          Day
        </option>
        {Days}
      </Field>
      <Field component="select" name="birthYear" className="select-field">
        <option key="year" value="">
          Year
        </option>
        {Years}
      </Field>
    </div>
  );
};

// Formik form management ref- https://github.com/jaredpalmer/formik

export const SevenElevenForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phone,
    zipcode,
    terms,
    offers,
    country,
    birthMonth,
    birthDay,
    birthYear
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      phone: phone || "",
      zipcode: zipcode || "",
      password: password || "",
      terms: terms || false,
      offers: offers || false,
      birthMonth: birthMonth || "",
      birthDay: birthDay || "",
      birthYear: birthYear || ""
    };
  },

  // Yup validation - ref https://github.com/jquense/yup

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/)
      .required(),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/)
      .required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required(),
    phone: Yup.number()
      .min(1000000000)
      .max(9999999999)
      .required(),
    zipcode: Yup.number()
      .min(5)
      .required(),
    terms: Yup.boolean().oneOf([true]),
    birthMonth: Yup.string().required(),
    birthDay: Yup.string().required(),
    birthYear: Yup.string().required()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(App);

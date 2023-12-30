// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { Component } from "react";

import { connect } from "react-redux";

import CoreViewField from "./CoreViewField";
import { createAllForms } from "../../../store/action/formAction";

class CoreViewForm extends Component {
  state = {};

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    const { forms, initData, formId } = this.props;

    // -- console.log("-------------VIEW PROPS", this.props);
    return forms[formId]?.formElements?.map((element, index) => (
      <CoreViewField key={`CoreViewField-${formId}-${index}`} element={element} data={initData} />
    ));
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.auth,
    forms: state.forms,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CreateAllForms: (formIds, initData, mode) => {
      dispatch(createAllForms(formIds, initData, mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreViewForm);

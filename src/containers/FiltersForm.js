import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

const FiltersForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </form>
  );
};

FiltersForm.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  // a unique name for the form
  form: 'filters',
})(FiltersForm);

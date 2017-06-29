import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {
  AutoComplete,
  SelectField,
  DatePicker,
} from 'redux-form-material-ui';
import { Payment, QueueMusic, BookmarkBorder } from 'material-ui-icons';
import styles from './FiltersForm.css';

const dataSource = ['Hip-Hop', 'Rap', 'Techno', 'Trap', 'Dance', 'Pop', 'Hard-Rock'];

class FiltersForm extends Component {
  render() {
    return (
      <form className={styles.formContainer}>
        <div className={styles.formContainerTopRow}>
          <div className={styles.date}>
            <Subheader inset={false} className={styles.subheader}>
              <BookmarkBorder className={styles.icon} />
              Select a date
            </Subheader>
            <Field
              name="date"
              component={DatePicker}
              format={null}
              floatingLabelText="What is the day of the event?"
            />
          </div>
          <div className={styles.price}>
            <Subheader inset={false} className={styles.subheader}>
              <Payment className={styles.icon} />
              Payment
            </Subheader>
            <Field
              name="price"
              component={SelectField}
              floatingLabelText="Select a plan"
            >
              <MenuItem value="0 - 500$" primaryText="0 - 500$" />
              <MenuItem value="500$ - 2000$" primaryText="500$ - 2000$" />
              <MenuItem value="2000$ - 5000$" primaryText="2000$ - 5000$" />
              <MenuItem value="+5000$" primaryText="+5000$" />
            </Field>
          </div>
        </div>
        <div>
          <div className={styles.genres}>
            <Subheader inset={false} className={styles.subheader}>
              <QueueMusic className={styles.icon} />
              Music Genres
            </Subheader>
            <Field
              name="genre"
              component={AutoComplete}
              floatingLabelText="Select some music genres"
              openOnFocus
              filter={MUIAutoComplete.fuzzyFilter}
              dataSource={dataSource}
            />
          </div>
        </div>
      </form>
    );
  }
}

// Decorate with redux-form
export default reduxForm({
  form: 'myForm',
})(FiltersForm);

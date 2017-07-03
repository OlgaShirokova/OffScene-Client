import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { array, object, func } from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {
  AutoComplete,
  SelectField,
  DatePicker,
} from 'redux-form-material-ui';
import { Payment, QueueMusic, BookmarkBorder } from 'material-ui-icons';
import styles from './styles.css';

class ArtistFilterForm extends Component {
  _handleRequestDelete = (key) => {
    this.props.onRemove(key);
  }

  _renderChips = () => {
    if (this.props.selectedGenres.length) {
      return this.props.selectedGenres.map((el) => {
        return (
          <Chip
            className={styles.chip}
            key={el}
            onRequestDelete={() => this._handleRequestDelete(el)}
          >
            {el}
          </Chip>
        );
      });
    }
    return (
      <Chip>No chips yet!</Chip>
    );
  };

  render() {
    const dataSource = Object.keys(this.props.genres)
      .map((key) => {
        return {
          valueKey: key,
          textKey: this.props.genres[key].name,
        };
      });
    const dataSourceConfig = {
      text: 'textKey',
      value: 'valueKey',
    };

    return (
      <form>
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
        <div className={styles.formContainerBottomRow}>
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
              dataSourceConfig={dataSourceConfig}
            />
          </div>
          <div className={styles.chips}>
            {this._renderChips()}
          </div>
        </div>
      </form>
    );
  }
}

ArtistFilterForm.propTypes = {
  genres: object.isRequired,
  selectedGenres: array.isRequired,
  onRemove: func.isRequired,
};

export default reduxForm({
  form: 'filtersForm', // a unique name for this form
})(ArtistFilterForm);

// Decorate with redux-form
// export default reduxForm({
//   form: 'myForm',
// })(FiltersForm);

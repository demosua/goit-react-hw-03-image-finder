import React, { Component } from "react";
import { SearchbarHeader, SearchForm , SearchFormButton, SearchFormLabel, SearchFormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  
  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter you want to find.');
      return;
    }
    
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render () {
    return(
      <SearchbarHeader>
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">
              <ImSearch style={{ marginRight: 8 }} />
            </SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    )
  }
}
export default Searchbar;
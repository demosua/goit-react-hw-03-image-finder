import React, { Component } from "react";
import { SearchbarHeader, SearchForm , SearchFormButton, SearchFormLabel, SearchFormInput } from './Searchbar.styled';

class Searchbar extends Component {
  render () {
    return(
      <SearchbarHeader>
        <SearchForm className="form">
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
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
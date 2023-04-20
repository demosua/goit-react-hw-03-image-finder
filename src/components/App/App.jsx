import React, { Component } from "react";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button'
import Loader from '../Loader'
import Modal from '../Modal'
// import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {
    query: '',
  };
  // const API_KEY_PIXABAY = "34930678-f4d511ae74090860518da87d0";
  // let page = 1;
  // let query = '';
  handleSubmit = query => {

  }

  render() {

    return (

      <Container>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery />
        {/* <Button />
        <Loader />
        <Modal /> */}
        <ToastContainer autoClose={3000} />
      </Container>
    )
  }
}

export default App;

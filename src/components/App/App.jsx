import React, { Component } from "react";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button'
import Loader from '../Loader'
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../api/pixabay';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

        await api
          .getImages(this.state.query, this.state.page)
          .then(result => this.setState(prevState => {
            return { images: [...prevState.images, ...result], status: 'resolved' }
          }))
          .catch(error => this.setState({ error, status: 'rejected' }))

    }
    
    if (this.state.page > 1) { this.scrollSmoothly() };
  }


  // { if (result.length === 0) {toast.warning(`There are no results with query: ${this.state.query}`)}

  scrollSmoothly = () => {
    const cardHeight = 320;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    })
  };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images, error, status } = this.state;

    return (
        <Container>
          <Searchbar onSubmit={this.handleSubmit} />
          {status === 'pending' && <Loader />}
          {status === 'rejected' && toast.error(error.message)}
          {status === 'resolved' &&
            <div>
            <ImageGallery images={images} />
            <Button onClick={this.handleLoadMore} />
            </div>
          }
          <ToastContainer autoClose={1000} />
        </Container>
        )
  }
}

export default App;
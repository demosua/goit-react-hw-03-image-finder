import React, { Component } from "react";
import { GalleryItem, Image } from './ImageGalleryItem.styled'
import Modal from '../Modal';


export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {this.setState({ isModalOpen: true })};
  closeModal = () => {this.setState({ isModalOpen: false })};

  handleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Image src={webformatURL} alt={id} />
        </GalleryItem>
        {isModalOpen && (<Modal id={id} largeImageURL={largeImageURL} onClose={this.handleModal}/>) }
      </>
    );
  }
}
export default ImageGalleryItem;
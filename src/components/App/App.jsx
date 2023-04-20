import React, { Component } from "react";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button'
import Loader from '../Loader'
import Modal from '../Modal'
// import { nanoid } from 'nanoid';
import { Container } from './App.styled';


class App extends Component {

  // const API_KEY_PIXABAY = "34930678-f4d511ae74090860518da87d0";
  // let page = 1;
  // let query = '';
  handleSubmit =() => {

  }

  render() {

    return (

      <Container>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
         {/* <Section>
         <Title>Phonebook</Title>
         <ContactForm onSubmit={this.addContact} contacts={this.state.contacts}/>  
         </Section>
         <h2>Contacts</h2>  
           <Filter value={filter} onChange={this.changeFilter} />
         <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/> */}
      </Container>
    )
  }
}

export default App;

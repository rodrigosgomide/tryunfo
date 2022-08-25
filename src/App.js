import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  realState = (key, value) => {
    let {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (key === 'cardName') {
      cardName = value;
    }
    if (key === 'cardDescription') {
      cardDescription = value;
    }
    if (key === 'cardImage') {
      cardImage = value;
    }
    if (key === 'cardRare') {
      cardRare = value;
    }
    if (key === 'cardAttr1') {
      cardAttr1 = value;
    }
    if (key === 'cardAttr2') {
      cardAttr2 = value;
    }
    if (key === 'cardAttr3') {
      cardAttr3 = value;
    }

    return {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 };
  };

  handlerButton = (obj) => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = obj;

    const MAX_ALLOWED_POINTS = 210;
    const MIN_ALLOWED_ATT_POINTS = 0;
    const MAX_ALLOWED_ATT_POINTS = 90;
    const cardAttr1N = parseInt(cardAttr1, 10);
    const cardAttr2N = parseInt(cardAttr2, 10);
    const cardAttr3N = parseInt(cardAttr3, 10);
    const total = cardAttr1N + cardAttr2N + cardAttr3N;

    return !(cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr1N >= MIN_ALLOWED_ATT_POINTS
      && cardAttr1N <= MAX_ALLOWED_ATT_POINTS
      && cardAttr2N >= MIN_ALLOWED_ATT_POINTS
      && cardAttr2N <= MAX_ALLOWED_ATT_POINTS
      && cardAttr3N >= MIN_ALLOWED_ATT_POINTS
      && cardAttr3N <= MAX_ALLOWED_ATT_POINTS
      && total <= MAX_ALLOWED_POINTS);
  };

  handlerChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });

    const x = this.realState(name, value);
    const xxx = this.handlerButton(x);

    this.setState({
      isSaveButtonDisabled: xxx,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Adcionar nova carta</h1>
        <Form
          onInputChange={ this.handlerChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

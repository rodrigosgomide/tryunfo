import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyDeck extends Component {
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
    } = this.props;
    return (
      <div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p>
            { cardDescription }
          </p>
          <div>
            <div>
              { cardAttr1 }
            </div>
            <div>
              { cardAttr2 }
            </div>
            <div>
              { cardAttr3 }
            </div>
            <div>
              { cardRare }
            </div>
            { cardTrunfo === true && <div> Super Trunfo </div>}
          </div>
        </div>
      </div>
    );
  }
}

MyDeck.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

MyDeck.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};
export default MyDeck;

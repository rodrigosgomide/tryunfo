import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
      <section>
        <div>
          <h2 data-testid="name-card">
            { cardName }
          </h2>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">
            { cardDescription }
          </p>
          <div>
            <div data-testid="attr1-card">
              { cardAttr1 }
            </div>
            <div data-testid="attr2-card">
              { cardAttr2 }
            </div>
            <div data-testid="attr3-card">
              { cardAttr3 }
            </div>
            <div data-testid="rare-card">
              { cardRare }
            </div>
            { cardTrunfo === true && <div data-testid="trunfo-card"> Super Trunfo </div>}
          </div>
        </div>
      </section>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};
export default Card;

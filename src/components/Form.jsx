import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="cardName">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea cols="30" rows="10" data-testid="description-input"> </textarea>
        </label>
        <label htmlFor="cardAttr1">
          Attr1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="cardAttr2">
          Attr2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="cardAttr3">
          Attr3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="cardType">
          Raridade
          <select name="cardType" id="" value="" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardSuperTrunfo">
          Carta Super Trunfo
          <input type="checkbox" name="" id="" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

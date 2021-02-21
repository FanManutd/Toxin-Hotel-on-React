/* eslint-disable max-len */
/* Параметры:
  elements - массив элементов дропдауна [{name: "Спальни", nameForms: ["Спальня","Спальни","Спален"], value: "2", min: "0", max: "5"},
                                         {name: "Кровати", nameForms: ["Кровать","Кровати","Кроватей"], value: "2", min: "0", max: "5"}]
  buttons - наличие кнопок внизу (true or false)
  resultDefault - строка которая выводится при нулевых значениях (Сколько гостей)
  keyWords - напр: ["гость","гостя","гостей"]. Если задан, результат выводится как сумма всех значений + keyWords (5 гостей).
  если не задан, результат выводится через запятую (1 спальня, 2 кровати). */

import DropdownElement from './__element/__element';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: this.props.isExpanded,
      isButtonClearHidden: true,
      result: this.props.resultDefault,
      elements: this.props.elements,
    };
    this.dropdownElements = React.createRef();
    this.dropdownWrapper = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
    this.updateResult();
  }

  handleDocumentClick = (e) => {
    if (this.state.isExpanded) {
      const outsideDropdown = this.dropdownElements.current !== e.target && !this.dropdownElements.current.contains(e.target) && !this.dropdownWrapper.current.contains(e.target);
      if (outsideDropdown) {
        this.changeIsExpanded();
      }
    }
  }

  handleDropdownInputClick = () => {
    this.changeIsExpanded();
  }

  handleButtonApplyClick = () => {
    this.changeIsExpanded();
  }

  handleButtonClearClick = () => {
    const buf = this.state.elements;
    // eslint-disable-next-line no-param-reassign
    buf.forEach((item) => { item.value = 0; });
    this.setState((state, props) => ({
      elements: buf,
      result: props.resultDefault,
      isButtonClearHidden: true,
    }));
  }

  changeIsExpanded = () => {
    this.setState((state) => ({
      isExpanded: !state.isExpanded,
    }));
  }

  updateValue = (value, index) => {
    const buf = this.state.elements;
    buf[index].value = value;
    this.setState({ elements: buf }); // !!!!!!!!!!!!!!!!!!
    this.updateResult();
  }

  updateResult = () => {
    let resultString = '';
    const sumCounts = this.state.elements.reduce((sum, item) => sum + Number(item.value), 0);

    if (sumCounts === 0) {
      this.setState((state, props) => ({
        result: props.resultDefault,
        isButtonClearHidden: true,
      }));
      return;
    }
    if (this.props.buttons) {
      this.setState({ isButtonClearHidden: false });
    }

    if (this.props.keyWords) {
      resultString = `${sumCounts} ${this.declOfNum(sumCounts, this.props.keyWords)}`;
    } else {
      for (let i = 0; i < 2; i++) {
        resultString += `${this.state.elements[i].value} ${this.declOfNum(this.state.elements[i].value, this.state.elements[i].nameForms)}, `;
      }
      if (this.state.elements.length > 2) {
        resultString = `${resultString.slice(0, -2)}...`;
      } else {
        resultString = resultString.slice(0, -2);
      }
    }

    this.setState({ result: resultString });
  }

  declOfNum(number, titles) { // формирование окончаний
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

    // use:
    // declOfNum(count, ['найдена', 'найдено', 'найдены']);
  }

  render() {
    const {
      title, buttons,
    } = this.props;
    // !!!!
    const isInputExpanded = this.state.isExpanded ? 'dropdown__input_expanded' : '';
    const isElementsExpanded = this.state.isExpanded ? 'dropdown__elements_expanded' : '';
    const isButtonClearHidden = this.state.isButtonClearHidden ? 'dropdown__clear_hidden' : '';

    return (
      <div className="dropdown">
        <div className="dropdown__title">{title}</div>
        <div className="dropdown__wrapper" onClick={this.handleDropdownInputClick} ref={this.dropdownWrapper}>
          <div className="dropdown__arrow">expand_more</div>
          <input type="text" className={`dropdown__input ${isInputExpanded}`} readOnly value={this.state.result} />
        </div>
        <div className={`dropdown__elements ${isElementsExpanded}`} ref={this.dropdownElements}>
          {this.state.elements.map((element, index) => <DropdownElement element={element} key={index} index={index} onChange={this.updateValue} />)}
          {buttons
            && <div className="dropdown__bottom-buttons">
              <button type="button" className={`dropdown__clear dropdown__bottom-button ${isButtonClearHidden}`} onClick={this.handleButtonClearClick}>очистить</button>
              <button type="button" className="dropdown__apply dropdown__bottom-button" onClick={this.handleButtonApplyClick}>применить</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  title: '',
  elements: [{
    name: 'Спальни', nameForms: ['Спальня', 'Спальни', 'Спален'], value: '2', min: '0', max: '5',
  },
  {
    name: 'Кровати', nameForms: ['Кровать', 'Кровати', 'Кроватей'], value: '2', min: '0', max: '5',
  }],
  buttons: true,
  resultDefault: 'Сколько комнат',
  keyWords: null,
  isExpanded: false,
};

export default Dropdown;

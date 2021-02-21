class DropdownElement extends React.Component {
  handleMinusClick = () => {
    const currentValue = Number(this.props.element.value) - 1;
    this.props.onChange(currentValue, this.props.index);
  }

  handlePlusClick = () => {
    const currentValue = Number(this.props.element.value) + 1;
    this.props.onChange(currentValue, this.props.index);
  }

  render() {
    const {
      name, value, min, max,
    } = this.props.element;

    return (
      <div className="dropdown__element">
        <div className="dropdown__name">{name}</div>
        <button type="button" className="dropdown__minus dropdown__button" disabled={value <= min} onClick={this.handleMinusClick}>-</button>
        <div className="dropdown__count">{value}</div>
        <button type="button" className="dropdown__plus dropdown__button" disabled={value >= max} onClick={this.handlePlusClick}>+</button>
      </div>
    );
  }
}

export default DropdownElement;

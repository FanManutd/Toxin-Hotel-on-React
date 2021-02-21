/* В color передаётся "white" или "purple". В place передаётся "in-form" или "in-header"!
Связано это с разным поведением отступов у кнопок в форме и в хэдере.
В форме у кнопки фиксированный минимальный размер,
а в хэдере кнопка более узкая и не имеет фикс. мин. размера.  */

class Button extends React.Component {
  render() {
    return (
      <button type='button' className={`button button_color_${this.props.color} button_place_${this.props.place}`}>{this.props.text}</button>
    );
  }
}

Button.defaultProps = {
  color: 'white',
  place: 'in-form',
  text: 'button',
};

export default Button;

/* В color передаётся "white" или "purple". В place передаётся "in-form" или "in-header"!
Связано это с разным поведением отступов у кнопок в форме и в хэдере.
В форме у кнопки фиксированный минимальный размер,
а в хэдере кнопка более узкая и не имеет фикс. мин. размера.  */

function Button(props) {
  const { color, place, text } = props;

  return (
    <button type='button' className={`button button_color_${color} button_place_${place}`}>{text}</button>
  );
}

Button.defaultProps = {
  color: 'white',
  place: 'in-form',
  text: 'button',
};

export default Button;

/* параметр title принимает: 'H1', 'H2', 'H3' или 'body' */

function Type(props) {
  const { title, text } = props;

  return (
    <div className="type">
      <div className={`type__name type__name_font_${title}`}>{title}</div>
      <h1 className={`type__text type__text_font_${title}`}>{text}</h1>
    </div>
  );
}

Type.defaultProps = {
  title: 'H1',
  text: 'This one is the sub-section or widget title',
};

export default Type;

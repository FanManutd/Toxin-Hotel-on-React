function RichCheckbox(props) {
  const richCheckboxes = props.richCheckboxes;

  return (
    <div className="rich-checkboxes">
      {richCheckboxes.map((item, index) => {
        const { label, description } = item;
        return (
          <div className="rich-checkbox" key={index}>
            <label className="rich-checkbox__label">
              <input type="checkbox" className="rich-checkbox__input" name={label}/>
              <span className="rich-checkbox__box"></span>
              {label}
            </label>
            <div className="rich-checkbox__description">{description}</div>
          </div>
        );
      })}
    </div>
  );
}

RichCheckbox.defaultProps = {
  richCheckboxes: [{ label: 'Широкий коридор', description: 'Ширина коридора в номере не менее 91 см.' }],
};

export default RichCheckbox;

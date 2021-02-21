function RadioButtons(props) {
  const { title, radioButtons } = props;

  return (
    <div className="radio-buttons">
      {radioButtons.map((item, index) => {
        const { label, isChecked } = item;
        return (
          <div className="radio-button" key={index}>
            <label className="radio-button__label">
              <input type="radio" className="radio-button__input" name={title} defaultValue={label} defaultChecked={isChecked} />
              <span className="radio-button__box"></span>
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

RadioButtons.defaultProps = {
  title: 'radio buttons',
  radioButtons: [{ label: 'Мужчина', isChecked: true }, { label: 'Женщина' }],
};

export default RadioButtons;

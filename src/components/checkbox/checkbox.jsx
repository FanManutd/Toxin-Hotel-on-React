function Checkbox(props) {
  const checkboxes = props.checkboxes;

  return (
    <div className="checkboxes">
      {checkboxes.map((item, index) => {
        const { label, isChecked } = item;
        return (
          <div className="checkbox" key={index}>
            <label className="checkbox__label">
              <input type="checkbox" className="checkbox__input" name={label} defaultChecked={isChecked} />
              <span className="checkbox__box"></span>
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

Checkbox.defaultProps = {
  checkboxes: [{ label: 'Можно курить' }, { label: 'Можно с питомцами', isChecked: true }],
};

export default Checkbox;

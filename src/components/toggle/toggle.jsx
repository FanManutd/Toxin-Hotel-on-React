function Toggle(props) {
  const { label, isChecked } = props;

  return (
    <div className="toggle">
      <label className="toggle__label">
        <input type="checkbox" className="toggle__input" name={label} defaultChecked={isChecked}/>
        <span className="toggle__box"></span>
        {label}
      </label>
    </div>
  );
}

Toggle.defaultProps = {
  label: 'Получать спецпредложения',
};

export default Toggle;

/* параметр type принимает значения: 'text', 'subsription' или 'masked' */

function TextField(props) {
  const {
    type, title, subtitle, inputType, value, placeholder, isRequired,
  } = props;

  let typeTextField;
  let pattern = null;
  let renderInput;
  if (type === 'text') {
    typeTextField = 'text-field';
    renderInput = <input type={inputType} className={`${typeTextField}__input`} placeholder={placeholder} defaultValue={value} required={isRequired} pattern={pattern} />;
  } else if (type === 'subscription') {
    typeTextField = 'subscription-text-field';
    renderInput = (
      <div className={`${typeTextField}__wrapper`}>
        <div className={`${typeTextField}__button-background`}></div>
        <button type="button" className={`${typeTextField}__button`}>arrow_forward</button>
        <input type={inputType} className={`${typeTextField}__input`} placeholder={placeholder} defaultValue={value} required={isRequired} pattern={pattern} />
      </div>
    );
  } else if (type === 'masked') {
    typeTextField = 'masked-text-field';
    pattern = '[0-9]{2}.[0-9]{2}.[0-9]{4}';
    renderInput = <input type={inputType} className={`${typeTextField}__input`} placeholder={placeholder} defaultValue={value} required={isRequired} pattern={pattern} />;
  } else {
    typeTextField = 'wrong type';
  }

  return (
    <div className={`${typeTextField}`}>
      <div className={`${typeTextField}__title`}>{title}</div>
      <div className={`${typeTextField}__subtitle`}>{subtitle}</div>
      {renderInput}
    </div>
  );
}

TextField.defaultProps = {
  type: 'text',
  title: '',
  subtitle: null,
  inputType: 'text',
  value: '',
  placeholder: 'Email',
  isRequired: false,
};

export default TextField;

function SubmitButton(props) {
  const text = props.text;

  return (
    <div className="submit-button">
      <button className="submit-button__button">{text}</button>
      <div type="button" className="submit-button__arrow">arrow_forward</div>
    </div>
  );
}

SubmitButton.defaultProps = { text: 'Submit' };

export default SubmitButton;

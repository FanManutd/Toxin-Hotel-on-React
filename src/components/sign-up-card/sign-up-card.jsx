import TextField from '../text-field/text-field';
import RadioButton from '../radio-button/radio-button';
import Toggle from '../toggle/toggle';
import SubmitButton from '../submit-button/submit-button';
import Button from '../button/button';
import myVars from '../../variables/variables';

function SignUpCard() {
  return (
  <div className="sign-up-card">
    <div className="sign-up-card__content">
      <form action="/mock-address" method="post">
        <div className="sign-up-card__title">Регистрация аккаунта</div>
        <div className="sign-up-card__name">
          <TextField type="text" placeholder="Имя" isRequired />
        </div>
        <div className="sign-up-card__surname">
          <TextField type="text" placeholder="Фамилия" isRequired />
        </div>
        <div className="sign-up-card__radio">
          <RadioButton title="Пол" radioButtons={myVars.radioButtons} />
        </div>
        <div className="sign-up-card__birthday">
          <TextField type="masked" title="Дата рождения" placeholder="ДД.ММ.ГГГГ" isRequired />
        </div>
        <div className="sign-up-card__email">
          <TextField type="text" inputType="email" title="Данные для входа в сервис" placeholder="Email" isRequired />
        </div>
        <div className="sign-up-card__password">
          <TextField type="text" inputType="password" placeholder="Пароль" isRequired />
        </div>
        <div className="sign-up-card__toggle">
          <Toggle label="Получать спецпредложения" />
        </div>
        <div className="sign-up-card__submit">
          <SubmitButton text="Перейти к оплате" />
        </div>
        <div className="sign-up-card__sign-in">
          <div className="sign-up-card__sign-in-text">Уже есть аккаунт на Toxin</div>
          <div className="sign-up-card__sign-in-button"></div>
          <Button color="white" place="in-form" text="Войти" />
        </div>
      </form>
    </div>
  </div>
  );
}

export default SignUpCard;

import TextField from '../text-field/text-field';
import SubmitButton from '../submit-button/submit-button';
import Button from '../button/button';

function SignInCard() {
  return (
    <div className="sign-in-card">
      <div className="sign-in-card__content">
        <form action="/mock-address" method="post">
          <div className="sign-in-card__title">Войти</div>
          <div className="sign-in-card__email">
            <TextField type="text" inputType="email" placeholder="Email" isRequired />
          </div>
          <div className="sign-in-card__password">
            <TextField type="text" inputType="password" placeholder="Пароль" isRequired />
          </div>
          <div className="sign-in-card__submit">
            <SubmitButton text="Войти" />
          </div>
          <div className="sign-in-card__sign-up">
            <div className="sign-in-card__sign-up-text">Нет аккаунта на Toxin?</div>
            <div className="sign-in-card__sign-up-button"></div>
            <Button color="white" place="in-form" text="Создать" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInCard;

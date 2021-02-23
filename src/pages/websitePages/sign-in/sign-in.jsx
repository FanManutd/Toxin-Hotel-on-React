import myVars from '../../../variables/variables';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import SignInCard from '../../../components/sign-in-card/sign-in-card';

function SignIn() {
  return (
    <div className="sign-in">
      <header className="sign-in__header">
        <Header navbar={myVars.navbarInHeaderRu} butLogin="войти" butRegister="зарегистрироваться" />
      </header>
      <main className="sign-in__image">
        <div className="sign-in__sign-in-card">
          <SignInCard />
        </div>
      </main>
      <footer className="sign-in__footer">
        <Footer footerText="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»" menu={myVars.footerMenuRu} subscribeTitle="Подписка" subscribeText="Получайте специальные предложения и новости сервиса" copyright="Copyright © 2018 Toxin отель. Все права зачищены." />
      </footer>
    </div>
  );
}

export default SignIn;

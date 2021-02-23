import myVars from '../../../variables/variables';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import SignUpCard from '../../../components/sign-up-card/sign-up-card';

function Registration() {
  return (
    <div className="registration">
      <header className="registration__header">
        <Header navbar={myVars.navbarInHeaderRu} butLogin="войти" butRegister="зарегистрироваться" />
      </header>
      <main className="registration__image">
        <div className="registration__sign-up-card">
          <SignUpCard />
        </div>
      </main>
      <footer className="registration__footer">
        <Footer footerText="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»" menu={myVars.footerMenuRu} subscribeTitle="Подписка" subscribeText="Получайте специальные предложения и новости сервиса" copyright="Copyright © 2018 Toxin отель. Все права зачищены." />
      </footer>
    </div>
  );
}

export default Registration;

const myVars = {
  blocksColor: [{ color: 'dark-shade-100', name: 'Dark Shade 100%', rgb: '#1F2041' }, { color: 'dark-shade-75', name: 'Dark Shade 75%', rgb: '#1F2041' },
    { color: 'dark-shade-50', name: 'Dark Shade 50%', rgb: '#1F2041' }, { color: 'dark-shade-25', name: 'Dark Shade 25%', rgb: '#1F2041' },
    { color: 'dark-shade-05', name: 'Dark Shade 5%', rgb: '#1F2041' }, { color: 'purple', name: 'Purple', rgb: '#BC9CFF' },
    { color: 'green', name: 'Green', rgb: '#6FCF97' }],

  types: [{ title: 'H1', text: 'This one is the sub-section or widget title' }, { title: 'H2', text: 'Next one is the item title inside widgets' },
    { title: 'H3', text: 'This is a label or CTA text' }, { title: 'body', text: 'This is the body text which is used for most of the design, like paragraphs, lists, etc.' }],

  roomDetailsInFormEl: [{ materIcon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглащающие стены' },
    { materIcon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' }],

  roomDetailsInSite: [{ materIcon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглащающие стены' },
    { materIcon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' },
    { materIcon: 'whatshot', title: 'Уют', description: 'Номер оснащён камином' }],

  checkboxes: [{ label: 'Можно курить' }, { label: 'Можно с питомцами', isChecked: true }, { label: 'Можно пригласить гостей (до 10 человек)', isChecked: true }],

  checkboxesToList: [{ label: 'Завтрак' }, { label: 'Письменный стол', isChecked: true }, { label: 'Стул для кормления', isChecked: true },
    { label: 'Кроватка', isChecked: true }, { label: 'Телевизор' }, { label: 'Шампунь' }, { label: 'Телевизор' }, { label: 'Шампунь' }],

  radioButtons: [{ label: 'Мужчина', isChecked: true }, { label: 'Женщина' }],

  richCheckboxes: [{ label: 'Широкий коридор', description: 'Ширина коридора в номере не менее 91 см.' },
    { label: 'Помощник для инвалидов', description: 'На 1 этаже вас встретит специалист и проводит до номера' }],

  bulletList: ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00'],

  dropdownInBookRoomCard: [{
    name: 'Взрослые', value: '0', min: '0', max: '3',
  }, {
    name: 'Дети', value: '1', min: '0', max: '3',
  }, {
    name: 'Младенцы', value: '0', min: '0', max: '3',
  }],

  dropdownInSearchRoomCard: [{
    name: 'Взрослые', value: '0', min: '0', max: '3',
  }, {
    name: 'Дети', value: '0', min: '0', max: '3',
  }, {
    name: 'Младенцы', value: '0', min: '0', max: '3',
  }],

  roomDropdown: [{
    name: 'Спальни', nameForms: ['Спальня', 'Спальни', 'Спален'], value: '2', min: '0', max: '5',
  },
  {
    name: 'Кровати', nameForms: ['Кровать', 'Кровати', 'Кроватей'], value: '2', min: '0', max: '5',
  },
  {
    name: 'Ванные комнаты', nameForms: ['Ванная комната', 'Ванных комнаты', 'Ванных комнат'], value: '0', min: '0', max: '5',
  }],

  dropdownMidInFormEl: [{
    name: 'Взрослые', value: '0', min: '0', max: '3',
  }, {
    name: 'Дети', value: '0', min: '0', max: '3',
  }, {
    name: 'Младенцы', value: '0', min: '0', max: '3',
  }],

  dropdownRightInFormEl: [{
    name: 'Взрослые', value: '2', min: '0', max: '3',
  }, {
    name: 'Дети', value: '1', min: '0', max: '3',
  }, {
    name: 'Младенцы', value: '0', min: '0', max: '3',
  }],

  guestDropdown: [{
    name: 'Гости', nameForms: ['гость', 'гостя', 'гостей'], value: '3', min: '0', max: '5',
  },
  {
    name: 'младенцы', nameForms: ['младенец', 'младенца', 'младенцев'], value: '1', min: '0', max: '3',
  }],

  navbarInHeaderEn: [{ url: '/mock-address', text: 'Home' },
    { url: '/mock-address', text: 'About Us' },
    { text: 'Services', submenu: [{ url: '/mock-address1', text: 'test1' }, { url: '/mock-address2', text: 'test2' }] },
    { url: '/mock-address', text: 'Careers' },
    { url: '/mock-address', text: 'News' },
    { text: 'Documentation', submenu: [{ url: '/mock-address3', text: 'test3' }, { url: '/mock-address4', text: 'test4' }] }],

  navbarInHeaderRu: [{ url: '/mock-address', text: 'О нас' },
    { text: 'Услуги', submenu: [{ url: '/mock-address', text: 'test1' }, { url: '/mock-address', text: 'test2' }] },
    { url: '/mock-address', text: 'Вакансии' },
    { url: '/mock-address', text: 'Новости' },
    { text: 'Соглашения', submenu: [{ url: '/mock-address', text: 'test3' }, { url: '/mock-address', text: 'test4' }] }],

  footerMenuEn: [{
    title: 'navigation',
    submenu: [{ url: '/mock-address', text: 'About Us' },
      { url: '/mock-address', text: 'News' },
      { url: '/mock-address', text: 'Support' },
      { url: '/mock-address', text: 'Products' }],
  },
  {
    title: 'about us',
    submenu: [{ url: '/mock-address', text: 'Who we are' },
      { url: '/mock-address', text: 'Our team' },
      { url: '/mock-address', text: 'Careers' },
      { url: '/mock-address', text: 'Investors' }],
  },
  {
    title: 'support',
    submenu: [{ url: '/mock-address', text: 'Documentation' },
      { url: '/mock-address', text: 'Community' },
      { url: '/mock-address', text: 'Get in Touch' }],
  }],

  footerMenuRu: [{
    title: 'навигация',
    submenu: [{ url: '/mock-address', text: 'О нас' },
      { url: '/mock-address', text: 'Новости' },
      { url: '/mock-address', text: 'Служба поддержки' },
      { url: '/mock-address', text: 'Услуги' }],
  },
  {
    title: 'О нас',
    submenu: [{ url: '/mock-address', text: 'О сервисе' },
      { url: '/mock-address', text: 'Наша команда' },
      { url: '/mock-address', text: 'Вакансии' },
      { url: '/mock-address', text: 'Инвесторы' }],
  },
  {
    title: 'служба поддержки',
    submenu: [{ url: '/mock-address', text: 'Соглашения' },
      { url: '/mock-address', text: 'Сообщества' },
      { url: '/mock-address', text: 'Связь с нами' }],
  }],
};

export default myVars;

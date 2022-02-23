'use strict';

// console.log('Hello World!\n'); \\

// the local storage is statement here \\

const siteStorage = window.localStorage;

// the root css element is statement here \\

const rootElement = document.querySelector(':root');

// the functions preload and download for potos \\

const pathsPhotos = ['winter', 'spring', 'summer', 'autumn'];

// the constants for a selected elements to get children \\

const buttonsPortfolio = document.getElementById('portfolio_buttons');
const photosPortfolio = document.getElementById('portfolio_photos');

function preloadPhotos() {
	for (let path of pathsPhotos) {
		for(let i = 1; i <= 6; i++) {
			const img = new Image();
		img.src = `./assets/photo/${path}/${path}${i}.jpg`;
		}
	};
};
preloadPhotos();

function downloadPhotos(name) {
	for (let j = 0; j < 6; j++) {
		let photo = photosPortfolio.children[j];
		photo.src = `./assets/photo/${name}/${name}${j + 1}.jpg`;
	};
};

// themes mode functions \\

// the code for switch dark/light themes is here \\

//	LIGHT MODE STYLES;
//	--back-color: white;
//	--text-color: black;
//	--gold-color: #bdae82;
//	--gold-black: black;
//	--back-hover: white;
//	--text-hover: black;

let darkMode = function() {
		themes_dark.classList.add('themes-none');
		themes_light.classList.remove('themes-none');
	rootElement.style.setProperty('--back-color', 'black');
	rootElement.style.setProperty('--text-color', 'white');
	rootElement.style.setProperty('--gold-black', '#bdae82');
	rootElement.style.setProperty('--back-hover', 'black');
	rootElement.style.setProperty('--text-hover', 'white');
	
};

let lightMode = function() {
		themes_light.classList.add('themes-none');
		themes_dark.classList.remove('themes-none');
	rootElement.style.setProperty('--back-color', 'white');
	rootElement.style.setProperty('--text-color', 'black');
	rootElement.style.setProperty('--gold-black', 'black');
	rootElement.style.setProperty('--back-hover', 'white');
	rootElement.style.setProperty('--text-hover', 'black');
};

// THE CODE FOR REFACTOR \\

const themeStyles = {
	lightStyles: {
		back_color: 'white',
		text_color: 'black',
		gold_black: 'black',
		back_hover: 'white',
		text_hover: 'black'
	},
	darkStyles: {
		back_color: 'black',
		text_color: 'white',
		gold_black: '#bdae82',
		back_hover: 'black',
		text_hover: 'white'
	}
};

//console.log(themeStyles.darkStyles['gold_black']);

header_themes.onclick = function() {
	if (themes_light.classList.contains('themes-none')) {
		//console.log('switch to dark');
		siteStorage.setItem('modeTheme', 'darkMode');
		darkMode();
	} else if (themes_dark.classList.contains('themes-none')) {
		//console.log('switch to light');
		siteStorage.setItem('modeTheme', 'lightMode');
		lightMode();
	};
};

// the code for elements activity is here \\
	
function eventsPortfolio(btn) {
	btn.addEventListener('click', activeButton);
		function activeButton(evnt) {
		if (evnt.target.classList.contains('active-button')) {
			return;
		} else {
			for (let item of buttonsPortfolio.children) {
				item.classList.remove('active-button');
				// console.log(item);
			};
		};
		evnt.target.classList.add('active-button');
		downloadPhotos(evnt.target.name) 
		//console.log(evnt.target.name);
	};
};

eventsPortfolio(buttonsPortfolio);

// the code for buttons effects is here \\

const clickButtons = document.getElementsByClassName('button-effect');

function effectsButtons(clcb) {
	for (let elm of clcb) {
	elm.addEventListener('click', clickCircles);
	}
	function clickCircles(evt) {
	if (evt.target.classList.contains('button-effect')) {
	
	const xInside = '110px';
	const yInside = '27px';
		
		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside;
		circle.style.left = xInside;
		
		this.append(circle);
		
		setTimeout(() => circle.remove(), 600)
		};
	};
};

effectsButtons(clickButtons);

// the code for bubbles buttons is here \\

const bubblyButton = document.getElementById('player_button');

function bubblesButtons(bbll) {
	
	const animateButton = function(e) {
	  e.target.classList.add('animate');
	  setTimeout (function() {
		e.target.classList.remove('animate');
	  },700);
	};
	
	bbll.addEventListener('click', animateButton, false);
};

bubblesButtons(bubblyButton);

// the code for adaptive & responsive design is below \\

const widthViewport = visualViewport.width;

const viewwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const viewheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const navPanel = document.getElementById('nav_panel');

function hideNav(evnt) {
	if (evnt.target.classList.contains('nav-link')) {
    	navPanel.classList.remove('nav-mobl-open');
		menu_burger.classList.toggle('burger-close');
		menu_burger.classList.toggle('burger-open');
	};
};

function burgerToggler() {
	menu_burger.classList.toggle('burger-open');
	menu_burger.classList.toggle('burger-close');
	if (menu_burger.className === 'burger-close') {
		navPanel.classList.add('nav-mobl-open');
		navPanel.addEventListener('click', hideNav);
		//console.log('Burger Close!');
	} else {
		navPanel.classList.remove('nav-mobl-open');
		navPanel.removeEventListener('click', hideNav);
		//console.log('Burger Open!');
	};
};

menu_burger.onclick = burgerToggler;

// the code for setup window sizes & resize is below \\

function setupWidth() {
	const outerWindow = window.outerWidth;
	const innerWindow = window.innerWidth;
	const heightWindow = window.innerHeight;
	rootElement.style.setProperty('--win-width', `${innerWindow}px`);
	rootElement.style.setProperty('--win-height', `${heightWindow}px`);
	rootElement.style.setProperty('--max-outer', `${innerWindow}px`);
	const rootProperty = getComputedStyle(rootElement);
	const varWinWidth = rootProperty.getPropertyValue('--win-width');
	const varWinHeight = rootProperty.getPropertyValue('--win-height');
	const varMaxOuter = rootProperty.getPropertyValue('--max-outer');
};

setupWidth();

window.onresize = function() {
	const outerWindow = window.outerWidth;
	const innerWindow = window.innerWidth;
	const heightWindow = window.innerHeight;
	rootElement.style.setProperty('--win-width', `${innerWindow}px`);
	rootElement.style.setProperty('--max-outer', `${innerWindow}px`);
	const rootProperty = getComputedStyle(rootElement);
	const varWinWidth = rootProperty.getPropertyValue('--win-width');
	const varMaxOuter = rootProperty.getPropertyValue('--max-outer');
};

// THE CONSOLE LOG WITH SCORE IS BELOW \\

console.log('Score: 95 / 95\nСмена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nScore: 95 / 95\n');

// THE "GUESS NUMBER" GAME IS BELOW \\

let gameCounter = 0;
let gameNumber = null;

function printCli() {
    console.log('\nИГРА "GUESS NUMBER" УГАДАЙ ЧИСЛО\nЧтобы начать игру введите "start\(\)"\nЧтобы ввести число введите "guess\(число\)"\nЧтобы сбросить результат введите "reset\(\)\"\n');
};

printCli();

function getNumber() {
    let generate = (Math.round(Math.random() * 100));
    return generate;
};

function start() {
    gameNumber = getNumber();
    console.log('За 10 попыток угадайте число от 0 до 100, введите "guess\(число\)", удачи!');
    return`Попыток ${gameCounter}`;
};

function guess(num) {
    let result = '';
    const lucky = num;
    if (gameCounter === -1) {
        return console.log('ИГРА ОКОНЧЕНА. ВВЕДИТЕ "reset\(\)"');
    } else if (gameCounter === 10) {
        gameCounter = -1;
        return console.log('ВЫ ПРОИГРАЛИ, GAME OVER.');
    } else if (lucky < gameNumber && ((gameNumber - lucky) > 15)) {
        console.log('Слишком маленькое');
    } else if (lucky < gameNumber && ((gameNumber - lucky) < 15)) {
        console.log('Немного маловато');
    } else if (lucky > gameNumber && ((lucky - gameNumber) > 15)) {
        console.log('Слишком большое');
    } else if (lucky > gameNumber && ((lucky - gameNumber) < 15)) {
        console.log('Чуть великовато');
    } else if (lucky === gameNumber) {
        gameCounter = -1;
        console.log('ПОЗДРАВЛЯЮ, ВЫ ВЫИГРАЛИ!');
        return `Вы угадали число ${gameNumber}`;
    };
	
result = `${result}${lucky}`;
console.log('Вы ввели число: ' + result);
gameCounter = gameCounter + 1;
return `Попытка ${gameCounter}`;
};

function reset() {
    gameCounter = 0;
    gameNumber = null;
    gameNumber = getNumber();
    return start();
};


// DICTIONARY \\

const i18Obj = {
  'eng': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-promo': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
	'price-plan-1': 'Standard',
	'price-plan-2': 'Premium',
	'price-plan-3': 'Gold',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
	'place-holder-1': 'E-mail',
	'place-holder-2': 'Phone',
	'place-holder-3': 'Message'
  },
  'rus': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-promo': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
	'price-plan-1': 'Обычный',
	'price-plan-2': 'Премиум',
	'price-plan-3': 'Золотой',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
	'place-holder-1': 'Е-мэйл',
	'place-holder-2': 'Телефон',
	'place-holder-3': 'Сообщение'
  }
};

function getTranslate(lang) {
	if (lang === 'rus') {
		lng_eng.classList.remove('lang-select');
		lng_rus.classList.add('lang-select');
	} else {
		lng_eng.classList.add('lang-select');
		lng_rus.classList.remove('lang-select');
	};
	const pullDataset = document.querySelectorAll('[data-i18n]');
	//console.log(pullDataset, pullDataset.length);
	for (let elm of pullDataset) {
	elm.textContent = i18Obj[lang][elm.dataset.i18n];
		if (elm.placeholder) {
			elm.placeholder = i18Obj[lang][elm.dataset.i18n];
		};
	};
};

// the code for switch eng/rus language is here \\

header_lang.onclick = function() {
	if (lng_eng.classList.contains('lang-select')) {
		//console.log('switch to russian');
		siteStorage.setItem('langMode', 'rus');
		getTranslate('rus');
	} else if (lng_rus.classList.contains('lang-select')) {
		//console.log('switch to english');
		siteStorage.setItem('langMode', 'eng');
		getTranslate('eng');
	};
};

//SETUP FROM STORAGE \\

function fromStorage() {
	if (siteStorage.length > 0 && siteStorage.getItem('modeTheme') === 'darkMode') {
		darkMode();
	} else if (siteStorage.length > 0 && siteStorage.getItem('modeTheme') === 'lightMode') {
		lightMode();
	};
	if (siteStorage.length > 0 && siteStorage.getItem('langMode') === 'rus') {
		getTranslate('rus');
	} else if (siteStorage.length > 0 && siteStorage.getItem('langMode') === 'eng') {
		getTranslate('eng');
	};
	//console.log(siteStorage);
};

fromStorage();
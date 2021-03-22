<template>
	<header class="header" v-if="!isTestStarted">
		<p class="header__title">Лучшие астрологи и&nbsp;экстрасенсы Румынии</p>
		<p class="header__subtitle">Точность прогноза: 97%</p>
	</header>

	<main class="content">
		<article class="intro" v-if="!isTestStarted">
			<img src="./assets/woman1.png" alt="интро" class="intro__image" />
			<img src="./assets/eyes.svg" alt="глаз" class="intro__subimage" />
			<p class="intro__text">
				Вас беспокоит вопрос о&nbsp;том,
				<span class="uppercase"
					>когда&nbsp;Вы покинете этот Мир и&nbsp;при каких
					обстоятельствах?</span
				>
			</p>
			<button class="intro__button intro__button_accept" @click="scrollDown">
				Да
				<div class="sparcle moving"></div>
			</button>
			<button class="intro__button intro__button_reject">
				Нет
				<div class="sparcle moving"></div>
			</button>

			<div class="intro__subtitle">Онлайн предсказание</div>
		</article>

		<article class="quote" v-if="!isTestStarted">
			<img src="./assets/hands.png" alt="цитата" class="quote__image" />
			<p class="quote__text">
				Позвольте нам раскрыть эту волнующую тайну и
				<span class="colored-text"
					>с&nbsp;точностью определить дату и&nbsp;время вашей смерти,</span
				>
				а&nbsp;также предшествующую этому событию причину
			</p>
		</article>

		<article class="cover" v-if="!isTestStarted">
			<p class="cover__text">
				Многие не&nbsp;верят предсказаниям и&nbsp;мы&nbsp;решили доказать
				каждому,
				<span class="colored-text"
					>что прогноз может изменить жизнь любого человека!</span
				>
			</p>
			<img src="./assets/image.jpg" alt="женщина" class="cover__image" />
		</article>

		<Test />
	</main>

	<footer class="footer" v-if="!isTestStarted">
		<img class="footer__image" src="./assets/rune1.svg" alt="руны" />
		<p class="footer__text">
			Вы,&nbsp;конечно,&nbsp;умрете.
			И&nbsp;все,&nbsp;с&nbsp;кем&nbsp;вы&nbsp;знакомы,
			тоже&nbsp;однажды&nbsp;умрут.
		</p>
		<img class="footer__image" src="./assets/rune2.svg" alt="руны" />
	</footer>
</template>

<script>
import Test from "./components/Test.vue";

export default {
	name: "App",

	components: {
		Test,
	},

	data() {
		return {
			isTestStarted: false,
		};
	},

	methods: {
		scrollDown() {
			const testElement = document.querySelector(`.test`);
			testElement.scrollIntoView({ block: "center", behavior: "smooth" });
		},
	},

	mounted() {
		const quote = document.querySelector(".quote");
		const cover = document.querySelector(".cover");
		const test = document.querySelector(".test_margin");
		const footer = document.querySelector(".footer");

		console.log(quote);

		document.addEventListener("scroll", () => {
			let scrollY = window.pageYOffset;

			if (scrollY > quote.offsetTop - 600) {
				quote.classList.add("animation");
			}
			if (scrollY > cover.offsetTop - 600) {
				cover.classList.add("animation");
			}

			if (scrollY > test.offsetTop - 600) {
				test.classList.add("animation");
			}

			if (scrollY > footer.offsetTop - 800) {
				footer.classList.add("animation");
			}
		});
	},
};
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

@font-face {
	src: url(./assets/fonts/Roboto-Regular.ttf);
	font-family: "Roboto";
	font-weight: normal;
}

@font-face {
	src: url(./assets/fonts/badscript.ttf);
	font-family: "Bad Script";
	font-weight: normal;
}

@font-face {
	src: url(./assets/fonts/Roboto-Light.ttf);
	font-family: "Roboto";
	font-weight: 300;
}

.root {
	margin: 0;
	background-color: #202024;
	color: #fff;
	font-family: "Roboto";
	background-image: url("./assets/blik.png");
	background-repeat: no-repeat;
	background-size: 1920px;
	background-position: top -100px left 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	max-width: 1440px;
	position: relative;
}

.header {
	width: 100%;
	max-width: 1440px;
}

.header__title {
	padding-bottom: 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	margin: 37px 0 12px;
	opacity: 0.6;
	font-weight: 300;
	font-size: 16px;
	text-align: center;
}

.header__subtitle {
	margin: 0 0 118px;
	opacity: 0.6;
	font-weight: 300;
	font-size: 25px;
	text-align: center;
}

.intro {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}

.intro__subimage {
	width: 370.7px;
	height: 344.61px;
	opacity: 0.2;
	position: absolute;
	z-index: 1;
	top: -53.64px;
	pointer-events: none;
}

.intro__button {
	width: 310.75px;
	height: 69.44px;
	background: linear-gradient(
		90deg,
		rgba(246, 200, 102, 0.9) -6.2%,
		rgba(254, 173, 53, 0.9) 100%
	);
	border-radius: 50px;
	border: none;
	outline-style: none;
	margin-bottom: 35px;
	color: #fff;
	font-size: 20px;
	line-height: 1.15;
	position: relative;
}

.sparcle {
	width: 151.03px;
	height: 69.44px;

	background: linear-gradient(
		248.67deg,
		rgba(255, 255, 255, 0) 30.84%,
		rgba(255, 255, 255, 0.29) 46.06%,
		rgba(255, 255, 255, 0) 64.04%
	);

	position: absolute;
	top: 0px;
	left: -15px;
}

.intro__text {
	color: #f6c866;
	font-size: 25px;
	line-height: 1.4;
	max-width: 500px;
	text-align: center;
	margin: 78px 0 40px;
}

.intro__image {
	width: 237.83px;
	height: 237.83px;
	z-index: 2;
}

.intro__subtitle {
	font-weight: 300;
	opacity: 0.6;
	font-size: 16px;
}

.uppercase {
	text-transform: uppercase;
}

.strong {
	font-weight: bold;
}

.quote {
	max-width: 450px;
	border: 1px solid #fff;
	position: relative;
	margin-top: 196px;
	opacity: 0;
}

.quote__image {
	position: absolute;
	width: 135.41px;
	height: 135.41px;
	top: -67.5px;
	left: 153px;
}

.quote__text {
	margin: 129px 32px 82px;
	font-size: 25px;
	line-height: 1.4;
	text-align: center;
}

.colored-text {
	color: #f6c866;
}

.cover {
	width: 100%;
	height: 606px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 70px;
	opacity: 0;
}

.cover__image {
	opacity: 0.2;
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	z-index: 1;
	pointer-events: none;
}

.cover__text {
	margin: 0;
	display: block;
	font-size: 26px;
	line-height: 1.4;
	max-width: 380px;
	text-align: center;
	z-index: 2;
}

.footer {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 153px;
	background: url("./assets/eye.svg") top 0 right 150px no-repeat,
		url("./assets/planet.svg") bottom 49px left 153px no-repeat;

	opacity: 0;
	background-size: 280px, 150px;
}

.footer__image {
	width: 56.52px;
	height: 17.36px;
}

.footer__text {
	font-family: Bad Script;
	font-size: 25px;
	line-height: 1.4;
	max-width: 300px;
	margin: 80px 0;
	text-align: center;
}

.animation {
	animation: appear 0.8s ease-in-out;
	animation-fill-mode: forwards;
}

.moving {
	animation: move 2.5s linear infinite;
}

@keyframes appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes move {
	0% {
		transform: matrix(1, 0, 0, 1, 0, 0);
	}

	100% {
		transform: matrix(1, 0, 0, 1, 190, 0);
	}
}

@media screen and (max-width: 1500px) {
	.footer {
		background: url("./assets/eye.svg") top 0 right -131px no-repeat,
			url("./assets/planet.svg") bottom 49px left -43px no-repeat;
	}

	.root {
		background-image: none;
	}
}

@media screen and (max-width: 670px) {
	.root {
		background-image: url("./assets/blik.png");
		background-size: 1000px;
		background-position: top 0 right -250px;
	}

	.header__title {
		font-size: 12px;
	}

	.header__subtitle {
		font-size: 20px;
		margin-bottom: 68px;
	}

	.intro__image {
		width: 137px;
		height: 137px;
	}

	.intro__subimage {
		width: 225px;
		height: 225px;
		top: -44px;
	}

	.intro__text {
		margin: 44px 15px 23px;
		font-size: 21px;
	}

	.intro__subtitle {
		font-size: 12px;
		line-height: 14px;
		font-weight: 300;
		letter-spacing: 0.1em;
	}

	.quote {
		margin: 58px 29px 0;
	}

	.quote__image {
		width: 78px;
		height: 78px;
		top: -40px;
		left: 50%;
		margin-left: -39px;
	}

	.quote__text {
		font-size: 16px;
		line-height: 1.5;
		margin: 58px 19px 32px;
	}

	.cover {
		max-height: 400px;
	}

	.cover__text {
		font-size: 16px;
		line-height: 1.5;
		margin: 0 50px;
	}

	.footer__image {
		width: 32px;
	}

	.footer__text {
		font-size: 20px;
	}

	.footer {
		background: url(/img/eye.828ed3d3.svg) top 0 right -31px no-repeat,
			url(/img/planet.8f6f68bb.svg) bottom 10px left -10px no-repeat;

		background-size: 184px, 89px;
		padding-bottom: 20px;
	}

	.footer__text {
		margin: 43px 50px 40px;
	}
}

@media screen and (max-width: 460px) {
	.intro__text {
		font-size: 16px;
		line-height: 1.5;
		margin: 44px 17px 23px;
	}

	.intro__button {
		width: 182px;
		height: 40px;
		font-size: 14px;
	}
	.sparcle {
		width: 87px;
		height: 40px;
	}

	@keyframes move {
		0% {
			transform: matrix(1, 0, 0, 1, 0, 0);
		}

		100% {
			transform: matrix(1, 0, 0, 1, 120, 0);
		}
	}

	.footer {
		background-size: 84px, 52px;
	}

	.footer__text {
		margin: 37px 43px 34px;
	}
}

</style>


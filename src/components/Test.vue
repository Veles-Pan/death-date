<template>
	<div class="test test_margin" v-if="isFirstQuestionShown">
		<p class="test__text">Боитесь ли вы умереть?</p>
		<button class="test__button" @click="startTest">
			Да
			<div class="sparcle moving"></div>
		</button>
		<button class="test__button">
			Нет
			<div class="sparcle moving"></div>
		</button>
		<p class="test__number">Вопрос 1-5</p>
	</div>

	<div class="test" v-if="isSecondQuestionShown">
		<div class="test-intro">
			<p class="test-intro__text">
				Мы&nbsp;расскажем Вам не&nbsp;только подробности вашей смерти,
				но&nbsp;также поможем Вам избежать этой ужасной даты и&nbsp;продлить
				вашу жизнь на&nbsp;многие годы.
			</p>
		</div>
		<div class="test__content">
			<p class="test__text">
				Когда Вы&nbsp;чувствуете себя наиболее комфортно?
			</p>
			<button class="test__button" @click="getThirdQuestion">
				Утро
				<div class="sparcle moving"></div>
			</button>
			<button class="test__button" @click="getThirdQuestion">
				День
				<div class="sparcle moving"></div>
			</button>
			<button class="test__button" @click="getThirdQuestion">
				Вечер
				<div class="sparcle moving"></div>
			</button>
			<button class="test__button" @click="getThirdQuestion">
				Ночь
				<div class="sparcle moving"></div>
			</button>
			<p class="test__number">Вопрос 2-5</p>
		</div>
	</div>

	<div class="test" v-if="isThirdQuestionShown">
		<div class="test-intro">
			<p class="test-intro__text">
				Уже совсем скоро Вы узнаете много интересного о своем будущем!
			</p>
		</div>
		<p class="test__text">Укажите свою дату рождения</p>
		<form class="test__form" novalidate>
			<input
				class="test__input"
				type="number"
				min="1"
				max="31"
				id="day"
				name="day"
				placeholder="День"
				:style="{ border: isDayValid ? '1px solid red' : 'none' }"
				@input="hasValidDay"
				required
			/>
			<img src="../assets/arrow.svg" class="arrow_day">
			<input
				class="test__input"
				type="number"
				min="1"
				max="12"
				id="mounth"
				name="mounth"
				placeholder="Месяц"
				:style="{ border: isMountValid ? '1px solid red' : 'none' }"
				@input="hasValidMounth"
				required
			/>
			<img src="../assets/arrow.svg" class="arrow_mounth">
			<input
				class="test__input"
				type="number"
				min="1910"
				:max="currentYear - 18"
				id="year"
				name="year"
				placeholder="Год"
				:style="{ border: isYearValid ? '1px solid red' : 'none' }"
				@input="hasValidYear"
				required
			/>
			<img src="../assets/arrow.svg" class="arrow_year">
			<button
				type="button"
				class="test__button"
				@click="getFourthdQuestion"
				:disabled="hasDisabledButton()"
			>
				Далее
				<div v-if="!hasDisabledButton()" class="sparcle moving"></div>
			</button>
		</form>
		<p class="test__number">Вопрос 3-5</p>
	</div>

	<div class="load" id="floatingBars" v-if="isLoadShown">
		<LoadList />
		<p class="load__text">Loading</p>
	</div>

	<div class="test" v-if="isFourthQuestionShown">
		<div class="test-intro">
			<p class="test-intro__text">
				Смерть родного человека&nbsp;&mdash; одно из&nbsp;тяжелейших испытаний
				в&nbsp;жизни каждого из&nbsp;нас!
			</p>
		</div>
		<p class="test__text">Снятся ли Вам умершие люди?</p>
		<button class="test__button" @click="getFifthQuestion">
			Да
			<div class="sparcle moving"></div>
		</button>
		<button class="test__button" @click="getFifthQuestion">
			Нет
			<div class="sparcle moving"></div>
		</button>
		<button class="test__button" @click="getFifthQuestion">
			Иногда
			<div class="sparcle moving"></div>
		</button>
		<p class="test__number">Вопрос 4-5</p>
	</div>

	<div class="test" v-if="isFifthQuestionShown">
		<div class="test-intro">
			<div class="message-box">
				<div class="message-box__rectangle">
					<p
						class="test-intro__text test-intro__text_black"
						v-if="currentYear - yearOfBorn < 36"
					>
						По вам скучает очень близкий человек, которого больше нет в мире
						живых.
					</p>

					<p
						class="test-intro__text test-intro__text_black"
						v-if="
							currentYear - yearOfBorn < 46 && currentYear - yearOfBorn > 35
						"
					>
						По вам скучает очень близкий человек, которого больше нет в мире
						живых. Возможно это дедушка или бабушка.
					</p>

					<p
						class="test-intro__text test-intro__text_black"
						v-if="currentYear - yearOfBorn > 46"
					>
						По вам скучает очень близкий человек, которого больше нет в мире
						живых. Возможно это кто-то из Ваших родителей.
					</p>
				</div>
				<div class="message-box__polygon"></div>
			</div>
		</div>
		<p class="test__text">
			Запись, которую&nbsp;Вы услышите, может шокировать людей с&nbsp;неокрепшей
			психикой. Вы&nbsp;готовы узнать, что ждет именно Вас?
		</p>
		<button class="test__button" @click="finishTest">
			Да
			<div class="sparcle moving"></div>
		</button>
		<button class="test__button" @click="finishTest">
			Затрудняюсь ответить
			<div class="sparcle moving"></div>
		</button>
		<p class="test__number">Вопрос 5-5</p>
	</div>

	<div class="test-intro-final" v-if="isTestFinished">
		<div class="message-box message-box_final">
			<div class="message-box__rectangle message-box__rectangle_final">
				<p class="test-intro-final__title">
					Спасибо за&nbsp;Ваши ответы!
					<strong
						>Мы&nbsp;подготовили для Вас персональную аудио запись с&nbsp;Вашим
						прогнозом.</strong
					>
				</p>
			</div>
			<div class="message-box__polygon message-box__polygon_final"></div>
		</div>

		<p class="test-intro-final__text">
			Вы&nbsp;можете узнать, как повлиять на&nbsp;события, которые ожидают вас
			в&nbsp;ближайшем будущем.
		</p>

		<p class="test-intro-final__info">
			<span class="uppercase strong"
				>Первое значимое событие может произойти уже {{ nextDay }},</span
			>
			Вам надо быть готовым, чтобы последствия не&nbsp;оказались необратимыми.
		</p>

		<p class="test-intro-final__text test-intro-final__text_buttom">
			Нажмите на&nbsp;кнопку ниже прямо сейчас и&nbsp;наберите наш номер
			телефона. Прослушайте важную информацию!
		</p>

		<button class="test-intro-final__button" @click="clickFinalButton">
			Позвонить и прослушать
			<div class="sparcle_big moving"></div>
		</button>

		<p class="test-intro-final__footer-text">
			TERMENI SI&nbsp;CONDITII: ACESTA ESTE UN&nbsp;SERVICIU
			DE&nbsp;DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA&nbsp;AVETI
			18&nbsp;ANI IMPLINITI,
		</p>
	</div>

	<ApiInfo v-if="isCallButtonClicked" />
</template>

<script>
import LoadList from "./LoadList.vue";
import ApiInfo from "./ApiInfo.vue";

export default {
	name: "Test",

	components: {
		LoadList,
		ApiInfo,
	},

	data() {
		return {
			isFirstQuestionShown: true,
			isSecondQuestionShown: false,
			isThirdQuestionShown: false,
			isFourthQuestionShown: false,
			isLoadShown: false,
			isFifthQuestionShown: false,
			isDayValid: false,
			isMountValid: false,
			isYearValid: false,
			isDisabled: [false, false, false],
			yearOfBorn: "",
			currentYear: new Date().getFullYear(),
			isTestFinished: false,
			isCallButtonClicked: false,
			nextDay: this.getNextDay(),
		};
	},

	methods: {
		startTest() {
			this.$parent.isTestStarted = true;
			this.isFirstQuestionShown = false;
			this.isSecondQuestionShown = true;
			document.querySelector(".root").style.backgroundImage = "none";
		},

		getThirdQuestion() {
			this.isSecondQuestionShown = false;
			this.isThirdQuestionShown = true;
		},

		getFourthdQuestion() {
			this.isThirdQuestionShown = false;
			this.isLoadShown = true;
			setTimeout(() => {
				this.isLoadShown = false;
				this.isFourthQuestionShown = true;
			}, 2300);
		},

		getFifthQuestion() {
			this.isFourthQuestionShown = false;
			this.isFifthQuestionShown = true;
		},

		finishTest() {
			this.isFifthQuestionShown = false;
			this.isTestFinished = true;
		},

		hasValidDay(event) {
			this.isDayValid = !event.target.validity.valid;
			this.isDisabled[0] = event.target.validity.valid;
			this.hasDisabledButton();
		},

		hasValidMounth(event) {
			this.isMountValid = !event.target.validity.valid;
			this.isDisabled[1] = event.target.validity.valid;
			this.hasDisabledButton();
		},

		hasValidYear(event) {
			this.isYearValid = !event.target.validity.valid;
			this.isDisabled[2] = event.target.validity.valid;
			this.yearOfBorn = parseInt(event.target.value);
			this.hasDisabledButton();
		},

		hasDisabledButton() {
			if (this.isDisabled[0] && this.isDisabled[1] && this.isDisabled[2]) {
				return false;
			} else {
				return true;
			}
		},

		clickFinalButton() {
			this.isTestFinished = false;
			this.isCallButtonClicked = true;
		},

		getNextDay() {
			const now = new Date();

			let dd = now.getDate() + 1;
			if (dd < 10) dd = "0" + dd;

			let mm = now.getMonth() + 1;
			if (mm < 10) mm = "0" + mm;

			let yy = now.getFullYear() % 100;
			if (yy < 10) yy = "0" + yy;

			return dd + "." + mm + "." + yy;
		},
	},
};
</script>

<style>
.test {
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.test__content {
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url("../assets/planet.svg");
	background-repeat: no-repeat;
	background-size: 90px;
	background-position: bottom 0 left 0;
}

.test_margin {
	margin: 133px 0 105px;
	opacity: 0;
}

.test__text {
	font-size: 25px;
	line-height: 29px;
	text-align: center;
	text-transform: uppercase;
	color: #f6c866;
	margin: 0 0 6px;
	max-width: 550px;
}

.test__button {
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
	margin-top: 35px;
	font-size: 20px;
	line-height: 23px;

	text-align: center;

	color: #ffffff;

	position: relative;
}

.intro__button:hover {
	cursor: pointer;
	opacity: .8;
}

.test__button:disabled {
	background: rgb(97, 97, 97);
}

.test-intro {

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	min-height: 224px;

	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	margin-bottom: 74px;

	z-index: 2;
}
.test-intro__text {
	font-family: Bad Script;
	font-size: 25px;
	line-height: 1.4;
	max-width: 420px;
	color: #ffffff;

	opacity: 0.6;
	margin: 0;
	z-index: 2;
	display: block;
	position: relative;
	background-image: url("../assets/eye.svg");
	background-repeat: no-repeat;
	background-size: 146px;
	background-position: bottom 0 right 0;

	padding: 30px 120px;
}

.test__input {
	width: 310.75px;
	height: 69.44px;

	background: linear-gradient(
		90deg,
		rgba(228, 228, 228, 0.9) -6.2%,
		rgba(203, 203, 203, 0.9) 100%
	);
	border-radius: 50px;
	border: none;
	outline-style: none;

	text-align: center;
	font-size: 20px;

	margin-top: 35px;

	-moz-appearance: textfield;
}


.test__number {
	font-weight: 300;
	font-size: 16px;
	line-height: 1.18;
	text-align: center;
	letter-spacing: 0.1em;

	color: rgba(255, 255, 255, 0.6);
	margin: calc(100vh - 87vh) 0 15px;
}

.test__input::placeholder {
	font-size: 20px;
	line-height: 23px;

	text-align: center;

	color: #202024;
}

.test__input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
}

.test__input::-webkit-outer-spin-button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
}

.test__form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}

#floatingBars {
	position: relative;
	width: 73px;
	height: 73px;
	margin: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.load__text {
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	color: rgba(255, 255, 255, 0.6);
	margin: 27px 0 0;
}

.message-box {
	position: absolute;
	top: 50px;
	z-index: 1;
	background-image: url("../assets/eye.svg");
	background-repeat: no-repeat;
	background-size: 146px;
	background-position: bottom 0 right 0;

	padding: 0 90px 30px;
}

.message-box_final {
	background: none;
	padding: 0;
}

.test-intro__text_black {
	color: #202024;
	opacity: 1;
	padding: 0;
	background: none;
}

.message-box__rectangle {
	width: 480px;
	height: 126px;

	background: #ffffff;
	border-radius: 5px;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.message-box__rectangle_final {
	height: 165px;
}

.message-box__polygon {
	background: transparent;
	border: 10px solid transparent;
	border-top: 20px solid white;
	position: absolute;
	top: 124px;
	right: 120px;
}

.message-box__polygon_final {
	top: 163px;
	right: 30px;
}

.test-intro-final__title {
	font-size: 25px;
	line-height: 1.4;

	text-align: center;

	color: #202024;
	max-width: 450px;
	z-index: 2;
	margin: 0;
}

.test-intro-final__text {
	max-width: 470px;
	font-weight: 300;
	font-size: 25px;
	line-height: 1.4;

	text-align: center;

	color: #ffffff;
}

.test-intro-final__text {
	margin: 250px 0 16px;
}

.test-intro-final__text_buttom {
	margin: 0 0 35px;
}

.test-intro-final__info {
	max-width: 480px;
	font-size: 25px;
	line-height: 1.4;

	text-align: center;

	color: #f6c866;
	padding: 64px 50px 38px;
	border: 1px solid #ffffff;
	box-sizing: border-box;
	border-radius: 3px;
	margin: 0 0 31px;
}

.test-intro-final__button {
	width: 395.07px;
	height: 79.67px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline-style: none;

	background: linear-gradient(
		90deg,
		rgba(76, 217, 100, 0.9) -6.2%,
		rgba(50, 185, 73, 0.9) 100%
	);
	border-radius: 50px;
	font-size: 20px;
	line-height: 23px;
	display: flex;

	text-align: center;

	color: #ffffff;
	margin: 0;
	position: relative;
}

.test-intro-final {
	width: 100%;

	margin-bottom: 30px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-height: 100vh;
}

.test-intro-final__footer-text {
	max-width: 500px;
	font-size: 12px;
	line-height: 1.5;

	text-align: center;
	letter-spacing: 3px;
	text-transform: uppercase;

	color: #9d9d9d;
	margin: 56px 0 0;
}

.sparcle_big {
	width: 151.03px;
	height: 79.44px;

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

.arrow_day {
	position: absolute;
	top: 68px;
	right: 20px;
	width: 16px;
}

.arrow_mounth {
	position: absolute;
	top: 175px;
	right: 20px;
	width: 16px;
}

.arrow_year {
	position: absolute;
	top: 283px;
	right: 20px;
	width: 16px;
}

@media screen and (max-width: 670px) {
	.test_margin {
		margin: 53px 0 15px;
	}
	.test-intro {
		margin-bottom: 36px;
		overflow: visible;
		background-image: url("../assets/eye.svg");
		background-repeat: no-repeat;
		background-size: 146px;
		background-position: bottom 10px right -40px;
	}
	.test-intro__text {
		font-size: 20px;
		line-height: 1.4;
		padding: 30px 50px;
		background-position: bottom 0 right -30px;
		background-size: 120px;
		max-width: 100%;
	}

	.test-intro__text {
		background: none;
		padding: 0;
	}

	.test__text {
		font-size: 20px;
		margin: 0 40px 0;
	}

	.test-intro__text_black {
		max-width: 400px;
	}

	.message-box__rectangle {
		max-width: 80vw;
	}

	.message-box {
		padding: 0;
	}

	.message-box__polygon {
		right: 30px;
	}

	.test-intro-final__title {
		font-size: 18px;
		line-height: 1.2;
		margin: 0 15px;
	}

	.test-intro-final__text {
		font-size: 14px;
		line-height: 1.1;
		margin-top: 210px;
	}

	.test-intro-final__text_buttom {
		margin: 10px 0 21px;
	}

	.message-box__rectangle_final {
		height: 120px;
	}

	.message-box__polygon_final {
		top: 118px;
	}

	.test-intro-final__info {
		font-size: 16px;
		line-height: 1.56;
		padding: 13px 15px;
		margin: 0 15px;
	}
}

@media screen and (max-width: 460px) {
	.test-intro__text {
		font-size: 14px;
		padding: 30px 43px;
		background-position: bottom 0 right -30px;
		background-size: 84px;
		max-width: 100%;
	}

	.test__text {
		font-size: 16px;
		line-height: 1.5;
		margin: 0 16px 0;
	}

	.test__button {
		width: 182px;
		height: 40px;
		font-size: 14px;
		margin-top: 10px;
	}

	.test__content {
		background-size: 52px;
		background-position: bottom 50px left -10px;
	}

	.test__number {
		font-size: 12px;
		margin-bottom: 46px;
		margin-top: 40px;
	}

	.test__input {
		width: 182px;
		height: 40px;
		margin-top: 10px;
		font-size: 14px;
	}

	.test__input::placeholder {
		font-size: 14px;
	}

	.test-intro {
		min-height: 145px;
		background-position: bottom 0 right -40px;
	}

	.message-box {
		top: 24px;
	}

	.test-intro__text_black {
		padding: 0 12px;
	}

	.message-box__rectangle {
		height: 94px;
	}

	.message-box__polygon {
		top: 92px;
	}

	.test-intro-final__title {
		font-size: 14px;
	}

	.test-intro-final__button {
		width: 242px;
		height: 48px;
		font-size: 14px;
	}

	.test-intro-final__footer-text {
		font-size: 7px;
		line-height: 1.3;
		max-width: 300px;
		margin-top: 18px;
	}

	.test-intro-final__text {
		margin: 150px 25px 20px;
	}

	.test-intro-final__text_buttom {
		margin: 10px 40px 21px;
	}

	.sparcle_big {
		width: 116px;
		height: 48px;
	}

	.arrow_day {
	top: 30px;
	right: 15px;
	width: 15px;
}

.arrow_mounth {
	top: 82px;
	right: 15px;
	width: 15px;
}

.arrow_year {
	top: 134px;
	right: 15px;
	width: 15px;
}
}
</style>

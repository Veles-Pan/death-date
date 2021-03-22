(function(t) {
	function e(e) {
		for (
			var n, a, r = e[0], o = e[1], l = e[2], b = 0, d = [];
			b < r.length;
			b++
		)
			(a = r[b]),
				Object.prototype.hasOwnProperty.call(c, a) && c[a] && d.push(c[a][0]),
				(c[a] = 0);
		for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
		u && u(e);
		while (d.length) d.shift()();
		return i.push.apply(i, l || []), s();
	}
	function s() {
		for (var t, e = 0; e < i.length; e++) {
			for (var s = i[e], n = !0, r = 1; r < s.length; r++) {
				var o = s[r];
				0 !== c[o] && (n = !1);
			}
			n && (i.splice(e--, 1), (t = a((a.s = s[0]))));
		}
		return t;
	}
	var n = {},
		c = { app: 0 },
		i = [];
	function a(e) {
		if (n[e]) return n[e].exports;
		var s = (n[e] = { i: e, l: !1, exports: {} });
		return t[e].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
	}
	(a.m = t),
		(a.c = n),
		(a.d = function(t, e, s) {
			a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
		}),
		(a.r = function(t) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(a.t = function(t, e) {
			if ((1 & e && (t = a(t)), 8 & e)) return t;
			if (4 & e && "object" === typeof t && t && t.__esModule) return t;
			var s = Object.create(null);
			if (
				(a.r(s),
				Object.defineProperty(s, "default", { enumerable: !0, value: t }),
				2 & e && "string" != typeof t)
			)
				for (var n in t)
					a.d(
						s,
						n,
						function(e) {
							return t[e];
						}.bind(null, n)
					);
			return s;
		}),
		(a.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t["default"];
					  }
					: function() {
							return t;
					  };
			return a.d(e, "a", e), e;
		}),
		(a.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(a.p = "/");
	var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		o = r.push.bind(r);
	(r.push = e), (r = r.slice());
	for (var l = 0; l < r.length; l++) e(r[l]);
	var u = o;
	i.push([0, "chunk-vendors"]), s();
})({
	0: function(t, e, s) {
		t.exports = s("56d7");
	},
	"37d1": function(t, e, s) {},
	"44c1": function(t, e, s) {},
	"56d7": function(t, e, s) {
		"use strict";
		s.r(e);
		s("e260"), s("e6cf"), s("cca6"), s("a79d");
		var n = s("7a23"),
			c = { key: 0, class: "header" },
			i = Object(n["g"])(
				"p",
				{ class: "header__title" },
				"Лучшие астрологи и экстрасенсы Румынии",
				-1
			),
			a = Object(n["g"])(
				"p",
				{ class: "header__subtitle" },
				"Точность прогноза: 97%",
				-1
			),
			r = { class: "content" },
			o = { key: 0, class: "intro" },
			l = Object(n["g"])(
				"img",
				{
					src: "https://i.imgur.com/YgN3YkS.png",
					alt: "интро",
					class: "intro__image",
				},
				null,
				-1
			),
			u = Object(n["g"])(
				"img",
				{
					src: "https://i.imgur.com/SHmgT9G.png",
					alt: "глаз",
					class: "intro__subimage",
				},
				null,
				-1
			),
			b = Object(n["g"])(
				"p",
				{ class: "intro__text" },
				[
					Object(n["f"])(" Вас беспокоит вопрос о том, "),
					Object(n["g"])(
						"span",
						{ class: "uppercase" },
						"когда Вы покинете этот Мир и при каких обстоятельствах?"
					),
				],
				-1
			),
			d = Object(n["f"])(" Да "),
			p = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			h = Object(n["f"])(" Нет "),
			j = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			O = Object(n["g"])(
				"div",
				{ class: "intro__subtitle" },
				"Онлайн предсказание",
				-1
			),
			g = { key: 1, class: "quote" },
			f = Object(n["g"])(
				"img",
				{
					src: "https://i.imgur.com/bzEfLLr.png",
					alt: "цитата",
					class: "quote__image",
				},
				null,
				-1
			),
			_ = Object(n["g"])(
				"p",
				{ class: "quote__text" },
				[
					Object(n["f"])(" Позвольте нам раскрыть эту волнующую тайну и "),
					Object(n["g"])(
						"span",
						{ class: "colored-text" },
						"с точностью определить дату и время вашей смерти,"
					),
					Object(n["f"])(" а также предшествующую этому событию причину "),
				],
				-1
			),
			m = { key: 2, class: "cover" },
			v = Object(n["g"])(
				"p",
				{ class: "cover__text" },
				[
					Object(n["f"])(
						" Многие не верят предсказаниям и мы решили доказать каждому, "
					),
					Object(n["g"])(
						"span",
						{ class: "colored-text" },
						"что прогноз может изменить жизнь любого человека!"
					),
				],
				-1
			),
			y = Object(n["g"])(
				"img",
				{
					src: "https://i.imgur.com/00GFHMJ.jpg",
					alt: "женщина",
					class: "cover__image",
				},
				null,
				-1
			),
			k = { key: 1, class: "footer" },
			x = Object(n["g"])(
				"img",
				{
					class: "footer__image",
					src: "https://i.imgur.com/IdOsrRE.png",
					alt: "руны",
				},
				null,
				-1
			),
			w = Object(n["g"])(
				"p",
				{ class: "footer__text" },
				" Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут. ",
				-1
			),
			T = Object(n["g"])(
				"img",
				{
					class: "footer__image",
					src: "https://i.imgur.com/KcN2Gec.png",
					alt: "руны",
				},
				null,
				-1
			);
		function S(t, e, s, S, D, F) {
			var Q = Object(n["j"])("Test");
			return (
				Object(n["h"])(),
				Object(n["c"])(
					n["a"],
					null,
					[
						D.isTestStarted
							? Object(n["d"])("", !0)
							: (Object(n["h"])(), Object(n["c"])("header", c, [i, a])),
						Object(n["g"])("main", r, [
							D.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(),
								  Object(n["c"])("article", o, [
										l,
										u,
										b,
										Object(n["g"])(
											"button",
											{
												class: "intro__button intro__button_accept",
												onClick:
													e[1] ||
													(e[1] = function() {
														return (
															F.scrollDown && F.scrollDown.apply(F, arguments)
														);
													}),
											},
											[d, p]
										),
										Object(n["g"])(
											"button",
											{
												class: "intro__button intro__button_reject",
												onClick:
													e[2] ||
													(e[2] = function() {
														return (
															F.scrollDown && F.scrollDown.apply(F, arguments)
														);
													}),
											},
											[h, j]
										),
										O,
								  ])),
							D.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(), Object(n["c"])("article", g, [f, _])),
							D.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(), Object(n["c"])("article", m, [v, y])),
							Object(n["g"])(Q),
						]),
						D.isTestStarted
							? Object(n["d"])("", !0)
							: (Object(n["h"])(), Object(n["c"])("footer", k, [x, w, T])),
					],
					64
				)
			);
		}
		var D = { key: 0, class: "test test_margin" },
			F = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Боитесь ли вы умереть?",
				-1
			),
			Q = Object(n["f"])(" Да "),
			I = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			G = Object(n["f"])(" Нет "),
			C = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			V = Object(n["g"])("p", { class: "test__number" }, "Вопрос 1-5", -1),
			L = { key: 1, class: "test" },
			B = Object(n["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(n["g"])(
						"p",
						{ class: "test-intro__text" },
						" Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы. "
					),
				],
				-1
			),
			R = { class: "test__content" },
			A = Object(n["g"])(
				"p",
				{ class: "test__text" },
				" Когда Вы чувствуете себя наиболее комфортно? ",
				-1
			),
			Y = Object(n["f"])(" Утро "),
			q = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			M = Object(n["f"])(" День "),
			N = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			E = Object(n["f"])(" Вечер "),
			P = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			H = Object(n["f"])(" Ночь "),
			J = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			U = Object(n["g"])("p", { class: "test__number" }, "Вопрос 2-5", -1),
			z = { key: 2, class: "test" },
			K = Object(n["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(n["g"])(
						"p",
						{ class: "test-intro__text" },
						" Уже совсем скоро Вы узнаете много интересного о своем будущем! "
					),
				],
				-1
			),
			$ = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Укажите свою дату рождения",
				-1
			),
			W = { class: "test__form", novalidate: "" },
			X = Object(n["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_day" },
				null,
				-1
			),
			Z = Object(n["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_mounth" },
				null,
				-1
			),
			tt = Object(n["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_year" },
				null,
				-1
			),
			et = Object(n["f"])(" Далее "),
			st = { key: 0, class: "sparcle moving" },
			nt = Object(n["g"])("p", { class: "test__number" }, "Вопрос 3-5", -1),
			ct = { key: 3, class: "load", id: "floatingBars" },
			it = Object(n["g"])("p", { class: "load__text" }, "Loading", -1),
			at = { key: 4, class: "test" },
			rt = Object(n["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(n["g"])(
						"p",
						{ class: "test-intro__text" },
						" Смерть родного человека — одно из тяжелейших испытаний в жизни каждого из нас! "
					),
				],
				-1
			),
			ot = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Снятся ли Вам умершие люди?",
				-1
			),
			lt = Object(n["f"])(" Да "),
			ut = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			bt = Object(n["f"])(" Нет "),
			dt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			pt = Object(n["f"])(" Иногда "),
			ht = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			jt = Object(n["g"])("p", { class: "test__number" }, "Вопрос 4-5", -1),
			Ot = { key: 5, class: "test" },
			gt = { class: "test-intro" },
			ft = { class: "message-box" },
			_t = { class: "message-box__rectangle" },
			mt = { key: 0, class: "test-intro__text test-intro__text_black" },
			vt = { key: 1, class: "test-intro__text test-intro__text_black" },
			yt = { key: 2, class: "test-intro__text test-intro__text_black" },
			kt = Object(n["g"])("div", { class: "message-box__polygon" }, null, -1),
			xt = Object(n["g"])(
				"p",
				{ class: "test__text" },
				" Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас? ",
				-1
			),
			wt = Object(n["f"])(" Да "),
			Tt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			St = Object(n["f"])(" Затрудняюсь ответить "),
			Dt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			Ft = Object(n["g"])("p", { class: "test__number" }, "Вопрос 5-5", -1),
			Qt = { key: 6, class: "test-intro-final" },
			It = Object(n["e"])(
				'<div class="message-box message-box_final"><div class="message-box__rectangle message-box__rectangle_final"><p class="test-intro-final__title"> Спасибо за Ваши ответы! <strong>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</strong></p></div><div class="message-box__polygon message-box__polygon_final"></div></div><p class="test-intro-final__text"> Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. </p>',
				2
			),
			Gt = { class: "test-intro-final__info" },
			Ct = { class: "uppercase strong" },
			Vt = Object(n["f"])(
				" Вам надо быть готовым, чтобы последствия не оказались необратимыми. "
			),
			Lt = Object(n["g"])(
				"p",
				{ class: "test-intro-final__text test-intro-final__text_buttom" },
				" Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию! ",
				-1
			),
			Bt = Object(n["f"])(" Позвонить и прослушать "),
			Rt = Object(n["g"])("div", { class: "sparcle_big moving" }, null, -1),
			At = Object(n["g"])(
				"p",
				{ class: "test-intro-final__footer-text" },
				" TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",
				-1
			);
		function Yt(t, e, s, c, i, a) {
			var r = Object(n["j"])("LoadList"),
				o = Object(n["j"])("ApiInfo");
			return (
				Object(n["h"])(),
				Object(n["c"])(
					n["a"],
					null,
					[
						i.isFirstQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", D, [
									F,
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[1] ||
												(e[1] = function() {
													return a.startTest && a.startTest.apply(a, arguments);
												}),
										},
										[Q, I]
									),
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[2] ||
												(e[2] = function() {
													return a.startTest && a.startTest.apply(a, arguments);
												}),
										},
										[G, C]
									),
									V,
							  ]))
							: Object(n["d"])("", !0),
						i.isSecondQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", L, [
									B,
									Object(n["g"])("div", R, [
										A,
										Object(n["g"])(
											"button",
											{
												class: "test__button",
												onClick:
													e[3] ||
													(e[3] = function() {
														return (
															a.getThirdQuestion &&
															a.getThirdQuestion.apply(a, arguments)
														);
													}),
											},
											[Y, q]
										),
										Object(n["g"])(
											"button",
											{
												class: "test__button",
												onClick:
													e[4] ||
													(e[4] = function() {
														return (
															a.getThirdQuestion &&
															a.getThirdQuestion.apply(a, arguments)
														);
													}),
											},
											[M, N]
										),
										Object(n["g"])(
											"button",
											{
												class: "test__button",
												onClick:
													e[5] ||
													(e[5] = function() {
														return (
															a.getThirdQuestion &&
															a.getThirdQuestion.apply(a, arguments)
														);
													}),
											},
											[E, P]
										),
										Object(n["g"])(
											"button",
											{
												class: "test__button",
												onClick:
													e[6] ||
													(e[6] = function() {
														return (
															a.getThirdQuestion &&
															a.getThirdQuestion.apply(a, arguments)
														);
													}),
											},
											[H, J]
										),
										U,
									]),
							  ]))
							: Object(n["d"])("", !0),
						i.isThirdQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", z, [
									K,
									$,
									Object(n["g"])("form", W, [
										Object(n["g"])(
											"input",
											{
												class: "test__input",
												type: "number",
												min: "1",
												max: "31",
												id: "day",
												name: "day",
												placeholder: "День",
												style: {
													border: i.isDayValid ? "1px solid red" : "none",
												},
												onInput:
													e[7] ||
													(e[7] = function() {
														return (
															a.hasValidDay && a.hasValidDay.apply(a, arguments)
														);
													}),
												required: "",
											},
											null,
											36
										),
										X,
										Object(n["g"])(
											"input",
											{
												class: "test__input",
												type: "number",
												min: "1",
												max: "12",
												id: "mounth",
												name: "mounth",
												placeholder: "Месяц",
												style: {
													border: i.isMountValid ? "1px solid red" : "none",
												},
												onInput:
													e[8] ||
													(e[8] = function() {
														return (
															a.hasValidMounth &&
															a.hasValidMounth.apply(a, arguments)
														);
													}),
												required: "",
											},
											null,
											36
										),
										Z,
										Object(n["g"])(
											"input",
											{
												class: "test__input",
												type: "number",
												min: "1910",
												max: i.currentYear - 18,
												id: "year",
												name: "year",
												placeholder: "Год",
												style: {
													border: i.isYearValid ? "1px solid red" : "none",
												},
												onInput:
													e[9] ||
													(e[9] = function() {
														return (
															a.hasValidYear &&
															a.hasValidYear.apply(a, arguments)
														);
													}),
												required: "",
											},
											null,
											44,
											["max"]
										),
										tt,
										Object(n["g"])(
											"button",
											{
												type: "button",
												class: "test__button",
												onClick:
													e[10] ||
													(e[10] = function() {
														return (
															a.getFourthdQuestion &&
															a.getFourthdQuestion.apply(a, arguments)
														);
													}),
												disabled: a.hasDisabledButton(),
											},
											[
												et,
												a.hasDisabledButton()
													? Object(n["d"])("", !0)
													: (Object(n["h"])(), Object(n["c"])("div", st)),
											],
											8,
											["disabled"]
										),
									]),
									nt,
							  ]))
							: Object(n["d"])("", !0),
						i.isLoadShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", ct, [Object(n["g"])(r), it]))
							: Object(n["d"])("", !0),
						i.isFourthQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", at, [
									rt,
									ot,
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[11] ||
												(e[11] = function() {
													return (
														a.getFifthQuestion &&
														a.getFifthQuestion.apply(a, arguments)
													);
												}),
										},
										[lt, ut]
									),
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[12] ||
												(e[12] = function() {
													return (
														a.getFifthQuestion &&
														a.getFifthQuestion.apply(a, arguments)
													);
												}),
										},
										[bt, dt]
									),
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[13] ||
												(e[13] = function() {
													return (
														a.getFifthQuestion &&
														a.getFifthQuestion.apply(a, arguments)
													);
												}),
										},
										[pt, ht]
									),
									jt,
							  ]))
							: Object(n["d"])("", !0),
						i.isFifthQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", Ot, [
									Object(n["g"])("div", gt, [
										Object(n["g"])("div", ft, [
											Object(n["g"])("div", _t, [
												i.currentYear - i.yearOfBorn < 36
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															mt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. "
													  ))
													: Object(n["d"])("", !0),
												i.currentYear - i.yearOfBorn < 46 &&
												i.currentYear - i.yearOfBorn > 35
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															vt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка. "
													  ))
													: Object(n["d"])("", !0),
												i.currentYear - i.yearOfBorn > 46
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															yt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей. "
													  ))
													: Object(n["d"])("", !0),
											]),
											kt,
										]),
									]),
									xt,
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[14] ||
												(e[14] = function() {
													return (
														a.finishTest && a.finishTest.apply(a, arguments)
													);
												}),
										},
										[wt, Tt]
									),
									Object(n["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[15] ||
												(e[15] = function() {
													return (
														a.finishTest && a.finishTest.apply(a, arguments)
													);
												}),
										},
										[St, Dt]
									),
									Ft,
							  ]))
							: Object(n["d"])("", !0),
						i.isTestFinished
							? (Object(n["h"])(),
							  Object(n["c"])("div", Qt, [
									It,
									Object(n["g"])("p", Gt, [
										Object(n["g"])(
											"span",
											Ct,
											"Первое значимое событие может произойти уже " +
												Object(n["k"])(i.nextDay) +
												",",
											1
										),
										Vt,
									]),
									Lt,
									Object(n["g"])(
										"button",
										{
											class: "test-intro-final__button",
											onClick:
												e[16] ||
												(e[16] = function() {
													return (
														a.clickFinalButton &&
														a.clickFinalButton.apply(a, arguments)
													);
												}),
										},
										[Bt, Rt]
									),
									At,
							  ]))
							: Object(n["d"])("", !0),
						i.isCallButtonClicked
							? (Object(n["h"])(), Object(n["c"])(o, { key: 7 }))
							: Object(n["d"])("", !0),
					],
					64
				)
			);
		}
		var qt = { class: "load__bar" },
			Mt = Object(n["e"])(
				'<li id="rotateG_01" class="blockG"></li><li id="rotateG_02" class="blockG"></li><li id="rotateG_03" class="blockG"></li><li id="rotateG_04" class="blockG"></li><li id="rotateG_05" class="blockG"></li><li id="rotateG_06" class="blockG"></li><li id="rotateG_07" class="blockG"></li><li id="rotateG_08" class="blockG"></li><li id="rotateG_09" class="blockG"></li><li id="rotateG_10" class="blockG"></li><li id="rotateG_11" class="blockG"></li><li id="rotateG_12" class="blockG"></li>',
				12
			);
		function Nt(t, e, s, c, i, a) {
			return Object(n["h"])(), Object(n["c"])("ul", qt, [Mt]);
		}
		var Et = { name: "LoadList" };
		s("7e5d");
		Et.render = Nt;
		var Pt = Et,
			Ht = { class: "api-info" },
			Jt = { key: 0, class: "api-info__text" },
			Ut = { key: 1, class: "api-info__text" },
			zt = { key: 2, class: "api-info__text" },
			Kt = { class: "hidden" },
			$t = { key: 3, class: "api-info__text" },
			Wt = { class: "hidden" },
			Xt = { key: 4, class: "api-info__text" },
			Zt = { class: "hidden" },
			te = { key: 5, class: "api-info__text" },
			ee = { class: "hidden" },
			se = { key: 6, class: "api-info__text" };
		function ne(t, e, s, c, i, a) {
			return (
				Object(n["h"])(),
				Object(n["c"])("div", Ht, [
					(Object(n["h"])(!0),
					Object(n["c"])(
						n["a"],
						null,
						Object(n["i"])(i.list, function(t, e) {
							return (
								Object(n["h"])(),
								Object(n["c"])("div", { key: e }, [
									"created" === e || "edited" === e
										? (Object(n["h"])(),
										  Object(n["c"])(
												"p",
												Jt,
												Object(n["k"])(e) +
													" : " +
													Object(n["k"])(a.getDate(t)),
												1
										  ))
										: "url" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", Ut, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												Object(n["g"])(
													"a",
													{ href: t, class: "api-info__link" },
													"Link to API",
													8,
													["href"]
												),
										  ]))
										: "homeworld" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", zt, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												Object(n["g"])(
													"span",
													Kt,
													Object(n["k"])(a.getHomeworldName(t)),
													1
												),
												Object(n["g"])(
													"a",
													{ href: t, class: "api-info__link" },
													Object(n["k"])(i.homeworld),
													9,
													["href"]
												),
										  ]))
										: "films" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", $t, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t, e) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																[
																	Object(n["g"])(
																		"span",
																		Wt,
																		Object(n["k"])(a.getFilmsTitle(t)),
																		1
																	),
																	Object(n["f"])(
																		" " + Object(n["k"])(i.filmTitle[e] + ", "),
																		1
																	),
																],
																8,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: "vehicles" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", Xt, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t, e) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																[
																	Object(n["g"])(
																		"span",
																		Zt,
																		Object(n["k"])(a.getVehiclesNames(t)),
																		1
																	),
																	Object(n["f"])(
																		Object(n["k"])(i.vehicles[e] + ", "),
																		1
																	),
																],
																8,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: "starships" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", te, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t, e) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																[
																	Object(n["g"])(
																		"span",
																		ee,
																		Object(n["k"])(a.getStarshipsNames(t)),
																		1
																	),
																	Object(n["f"])(
																		Object(n["k"])(i.starships[e] + ", "),
																		1
																	),
																],
																8,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: (Object(n["h"])(),
										  Object(n["c"])(
												"p",
												se,
												Object(n["k"])(e) + " : " + Object(n["k"])(t),
												1
										  )),
								])
							);
						}),
						128
					)),
				])
			);
		}
		var ce = s("1da1"),
			ie =
				(s("96cf"),
				s("5319"),
				s("ac1f"),
				s("d3b7"),
				s("b0c0"),
				{
					name: "ApiInfo",
					data: function() {
						return {
							list: "",
							homeworld: "",
							filmTitle: [],
							vehicles: [],
							starships: [],
						};
					},
					methods: {
						getDate: function(t) {
							var e = new Date(t);
							return this.formatDate(e);
						},
						formatDate: function(t) {
							var e = t.getDate();
							e < 10 && (e = "0" + e);
							var s = t.getMonth() + 1;
							s < 10 && (s = "0" + s);
							var n = t.getFullYear() % 100;
							return n < 10 && (n = "0" + n), e + "." + s + "." + n;
						},
						getHomeworldName: function(t) {
							var e = this;
							return Object(ce["a"])(
								regeneratorRuntime.mark(function s() {
									var n, c, i;
									return regeneratorRuntime.wrap(
										function(s) {
											while (1)
												switch ((s.prev = s.next)) {
													case 0:
														return (
															(n = t.replace("http://", "https://")),
															(s.prev = 1),
															(s.next = 4),
															fetch(n)
														);
													case 4:
														return (c = s.sent), (s.next = 7), c.json();
													case 7:
														(i = s.sent), (e.homeworld = i.name), (s.next = 14);
														break;
													case 11:
														(s.prev = 11),
															(s.t0 = s["catch"](1)),
															console.log(s.t0);
													case 14:
													case "end":
														return s.stop();
												}
										},
										s,
										null,
										[[1, 11]]
									);
								})
							)();
						},
						getFilmsTitle: function(t) {
							var e = this;
							return Object(ce["a"])(
								regeneratorRuntime.mark(function s() {
									var n, c, i;
									return regeneratorRuntime.wrap(
										function(s) {
											while (1)
												switch ((s.prev = s.next)) {
													case 0:
														return (
															(n = t.replace("http://", "https://")),
															(s.prev = 1),
															(s.next = 4),
															fetch(n)
														);
													case 4:
														return (c = s.sent), (s.next = 7), c.json();
													case 7:
														(i = s.sent),
															e.filmTitle.push(i.title),
															(s.next = 14);
														break;
													case 11:
														(s.prev = 11),
															(s.t0 = s["catch"](1)),
															console.log(s.t0);
													case 14:
													case "end":
														return s.stop();
												}
										},
										s,
										null,
										[[1, 11]]
									);
								})
							)();
						},
						getVehiclesNames: function(t) {
							var e = this;
							return Object(ce["a"])(
								regeneratorRuntime.mark(function s() {
									var n, c, i;
									return regeneratorRuntime.wrap(
										function(s) {
											while (1)
												switch ((s.prev = s.next)) {
													case 0:
														return (
															(n = t.replace("http://", "https://")),
															(s.prev = 1),
															(s.next = 4),
															fetch(n)
														);
													case 4:
														return (c = s.sent), (s.next = 7), c.json();
													case 7:
														(i = s.sent),
															e.vehicles.push(i.name),
															(s.next = 14);
														break;
													case 11:
														(s.prev = 11),
															(s.t0 = s["catch"](1)),
															console.log(s.t0);
													case 14:
													case "end":
														return s.stop();
												}
										},
										s,
										null,
										[[1, 11]]
									);
								})
							)();
						},
						getStarshipsNames: function(t) {
							var e = this;
							return Object(ce["a"])(
								regeneratorRuntime.mark(function s() {
									var n, c, i;
									return regeneratorRuntime.wrap(
										function(s) {
											while (1)
												switch ((s.prev = s.next)) {
													case 0:
														return (
															(n = t.replace("http://", "https://")),
															(s.prev = 1),
															(s.next = 4),
															fetch(n)
														);
													case 4:
														return (c = s.sent), (s.next = 7), c.json();
													case 7:
														(i = s.sent),
															e.starships.push(i.name),
															(s.next = 14);
														break;
													case 11:
														(s.prev = 11),
															(s.t0 = s["catch"](1)),
															console.log(s.t0);
													case 14:
													case "end":
														return s.stop();
												}
										},
										s,
										null,
										[[1, 11]]
									);
								})
							)();
						},
						getInfoFromApi: function(t) {
							var e = this.requestApi(t);
							return e;
						},
						requestApi: function(t) {
							return Object(ce["a"])(
								regeneratorRuntime.mark(function e() {
									var s, n;
									return regeneratorRuntime.wrap(
										function(e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.prev = 0), (e.next = 3), fetch(t);
													case 3:
														return (s = e.sent), (e.next = 6), s.json();
													case 6:
														return (n = e.sent), e.abrupt("return", n);
													case 10:
														(e.prev = 10),
															(e.t0 = e["catch"](0)),
															console.log(e.t0);
													case 13:
													case "end":
														return e.stop();
												}
										},
										e,
										null,
										[[0, 10]]
									);
								})
							)();
						},
						requestFirstApi: function(t) {
							var e = this;
							return Object(ce["a"])(
								regeneratorRuntime.mark(function s() {
									var n, c;
									return regeneratorRuntime.wrap(
										function(s) {
											while (1)
												switch ((s.prev = s.next)) {
													case 0:
														return (s.prev = 0), (s.next = 3), fetch(t);
													case 3:
														return (n = s.sent), (s.next = 6), n.json();
													case 6:
														return (
															(c = s.sent), (e.list = c), s.abrupt("return", c)
														);
													case 11:
														(s.prev = 11),
															(s.t0 = s["catch"](0)),
															console.log(s.t0);
													case 14:
													case "end":
														return s.stop();
												}
										},
										s,
										null,
										[[0, 11]]
									);
								})
							)();
						},
					},
					beforeMount: function() {
						var t = this.requestFirstApi("https://swapi.dev/api/people/1/");
						this.list = t;
					},
				});
		s("b92b");
		ie.render = ne;
		var ae = ie,
			re = {
				name: "Test",
				components: { LoadList: Pt, ApiInfo: ae },
				data: function() {
					return {
						isFirstQuestionShown: !0,
						isSecondQuestionShown: !1,
						isThirdQuestionShown: !1,
						isFourthQuestionShown: !1,
						isLoadShown: !1,
						isFifthQuestionShown: !1,
						isDayValid: !1,
						isMountValid: !1,
						isYearValid: !1,
						isDisabled: [!1, !1, !1],
						yearOfBorn: "",
						currentYear: new Date().getFullYear(),
						isTestFinished: !1,
						isCallButtonClicked: !1,
						nextDay: this.getNextDay(),
					};
				},
				methods: {
					startTest: function() {
						(this.$parent.isTestStarted = !0),
							(this.isFirstQuestionShown = !1),
							(this.isSecondQuestionShown = !0),
							(document.querySelector(".root").style.backgroundImage = "none");
					},
					getThirdQuestion: function() {
						(this.isSecondQuestionShown = !1), (this.isThirdQuestionShown = !0);
					},
					getFourthdQuestion: function() {
						var t = this;
						(this.isThirdQuestionShown = !1),
							(this.isLoadShown = !0),
							setTimeout(function() {
								(t.isLoadShown = !1), (t.isFourthQuestionShown = !0);
							}, 2300);
					},
					getFifthQuestion: function() {
						(this.isFourthQuestionShown = !1), (this.isFifthQuestionShown = !0);
					},
					finishTest: function() {
						(this.isFifthQuestionShown = !1), (this.isTestFinished = !0);
					},
					hasValidDay: function(t) {
						(this.isDayValid = !t.target.validity.valid),
							(this.isDisabled[0] = t.target.validity.valid),
							this.hasDisabledButton();
					},
					hasValidMounth: function(t) {
						(this.isMountValid = !t.target.validity.valid),
							(this.isDisabled[1] = t.target.validity.valid),
							this.hasDisabledButton();
					},
					hasValidYear: function(t) {
						(this.isYearValid = !t.target.validity.valid),
							(this.isDisabled[2] = t.target.validity.valid),
							(this.yearOfBorn = parseInt(t.target.value)),
							this.hasDisabledButton();
					},
					hasDisabledButton: function() {
						return !(
							this.isDisabled[0] &&
							this.isDisabled[1] &&
							this.isDisabled[2]
						);
					},
					clickFinalButton: function() {
						(this.isTestFinished = !1), (this.isCallButtonClicked = !0);
					},
					getNextDay: function() {
						var t = new Date(),
							e = t.getDate() + 1;
						e < 10 && (e = "0" + e);
						var s = t.getMonth() + 1;
						s < 10 && (s = "0" + s);
						var n = t.getFullYear() % 100;
						return n < 10 && (n = "0" + n), e + "." + s + "." + n;
					},
				},
			};
		s("7cb4");
		re.render = Yt;
		var oe = re,
			le = {
				name: "App",
				components: { Test: oe },
				data: function() {
					return { isTestStarted: !1 };
				},
				methods: {
					scrollDown: function() {
						var t = document.querySelector(".test");
						t.scrollIntoView({ block: "center", behavior: "smooth" });
					},
				},
				mounted: function() {
					var t = document.querySelector(".quote"),
						e = document.querySelector(".cover"),
						s = document.querySelector(".test_margin"),
						n = document.querySelector(".footer");
					document.addEventListener("scroll", function() {
						var c = window.pageYOffset;
						c > t.offsetTop - 600 && t.classList.add("animation"),
							c > e.offsetTop - 600 && e.classList.add("animation"),
							c > s.offsetTop - 600 && s.classList.add("animation"),
							c > n.offsetTop - 800 && n.classList.add("animation");
					});
				},
			};
		s("76a5");
		le.render = S;
		var ue = le;
		Object(n["b"])(ue).mount("#app");
	},
	"5e66": function(t, e, s) {},
	"76a5": function(t, e, s) {
		"use strict";
		s("44c1");
	},
	"7cb4": function(t, e, s) {
		"use strict";
		s("37d1");
	},
	"7e5d": function(t, e, s) {
		"use strict";
		s("c04a");
	},
	b92b: function(t, e, s) {
		"use strict";
		s("5e66");
	},
	c04a: function(t, e, s) {},
});
//# sourceMappingURL=app.c62a14f4.js.map

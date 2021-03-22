(function(t) {
	function e(e) {
		for (
			var c, a, o = e[0], l = e[1], r = e[2], b = 0, d = [];
			b < o.length;
			b++
		)
			(a = o[b]),
				Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
				(i[a] = 0);
		for (c in l) Object.prototype.hasOwnProperty.call(l, c) && (t[c] = l[c]);
		u && u(e);
		while (d.length) d.shift()();
		return n.push.apply(n, r || []), s();
	}
	function s() {
		for (var t, e = 0; e < n.length; e++) {
			for (var s = n[e], c = !0, o = 1; o < s.length; o++) {
				var l = s[o];
				0 !== i[l] && (c = !1);
			}
			c && (n.splice(e--, 1), (t = a((a.s = s[0]))));
		}
		return t;
	}
	var c = {},
		i = { app: 0 },
		n = [];
	function a(e) {
		if (c[e]) return c[e].exports;
		var s = (c[e] = { i: e, l: !1, exports: {} });
		return t[e].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
	}
	(a.m = t),
		(a.c = c),
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
				for (var c in t)
					a.d(
						s,
						c,
						function(e) {
							return t[e];
						}.bind(null, c)
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
	var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		l = o.push.bind(o);
	(o.push = e), (o = o.slice());
	for (var r = 0; r < o.length; r++) e(o[r]);
	var u = l;
	n.push([0, "chunk-vendors"]), s();
})({
	0: function(t, e, s) {
		t.exports = s("56d7");
	},
	"44c1": function(t, e, s) {},
	"56d7": function(t, e, s) {
		"use strict";
		s.r(e);
		s("e260"), s("e6cf"), s("cca6"), s("a79d");
		var c = s("7a23"),
			i = { key: 0, class: "header" },
			n = Object(c["g"])(
				"p",
				{ class: "header__title" },
				"Лучшие астрологи и экстрасенсы Румынии",
				-1
			),
			a = Object(c["g"])(
				"p",
				{ class: "header__subtitle" },
				"Точность прогноза: 97%",
				-1
			),
			o = { class: "content" },
			l = { key: 0, class: "intro" },
			r = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/YgN3YkS.png",
					alt: "интро",
					class: "intro__image",
				},
				null,
				-1
			),
			u = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/SHmgT9G.png",
					alt: "глаз",
					class: "intro__subimage",
				},
				null,
				-1
			),
			b = Object(c["g"])(
				"p",
				{ class: "intro__text" },
				[
					Object(c["f"])(" Вас беспокоит вопрос о том, "),
					Object(c["g"])(
						"span",
						{ class: "uppercase" },
						"когда Вы покинете этот Мир и при каких обстоятельствах?"
					),
				],
				-1
			),
			d = Object(c["f"])(" Да "),
			O = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			j = Object(c["f"])(" Нет "),
			p = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			g = Object(c["g"])(
				"div",
				{ class: "intro__subtitle" },
				"Онлайн предсказание",
				-1
			),
			f = { key: 1, class: "quote" },
			h = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/bzEfLLr.png",
					alt: "цитата",
					class: "quote__image",
				},
				null,
				-1
			),
			_ = Object(c["g"])(
				"p",
				{ class: "quote__text" },
				[
					Object(c["f"])(" Позвольте нам раскрыть эту волнующую тайну и "),
					Object(c["g"])(
						"span",
						{ class: "colored-text" },
						"с точностью определить дату и время вашей смерти,"
					),
					Object(c["f"])(" а также предшествующую этому событию причину "),
				],
				-1
			),
			m = { key: 2, class: "cover" },
			v = Object(c["g"])(
				"p",
				{ class: "cover__text" },
				[
					Object(c["f"])(
						" Многие не верят предсказаниям и мы решили доказать каждому, "
					),
					Object(c["g"])(
						"span",
						{ class: "colored-text" },
						"что прогноз может изменить жизнь любого человека!"
					),
				],
				-1
			),
			y = Object(c["g"])(
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
			x = Object(c["g"])(
				"img",
				{
					class: "footer__image",
					src: "https://i.imgur.com/IdOsrRE.png",
					alt: "руны",
				},
				null,
				-1
			),
			S = Object(c["g"])(
				"p",
				{ class: "footer__text" },
				" Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут. ",
				-1
			),
			T = Object(c["g"])(
				"img",
				{
					class: "footer__image",
					src: "https://i.imgur.com/KcN2Gec.png",
					alt: "руны",
				},
				null,
				-1
			);
		function w(t, e, s, w, D, F) {
			var Q = Object(c["j"])("Test");
			return (
				Object(c["h"])(),
				Object(c["c"])(
					c["a"],
					null,
					[
						D.isTestStarted
							? Object(c["d"])("", !0)
							: (Object(c["h"])(), Object(c["c"])("header", i, [n, a])),
						Object(c["g"])("main", o, [
							D.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(),
								  Object(c["c"])("article", l, [
										r,
										u,
										b,
										Object(c["g"])(
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
											[d, O]
										),
										Object(c["g"])(
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
											[j, p]
										),
										g,
								  ])),
							D.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(), Object(c["c"])("article", f, [h, _])),
							D.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(), Object(c["c"])("article", m, [v, y])),
							Object(c["g"])(Q),
						]),
						D.isTestStarted
							? Object(c["d"])("", !0)
							: (Object(c["h"])(), Object(c["c"])("footer", k, [x, S, T])),
					],
					64
				)
			);
		}
		var D = { key: 0, class: "test test_margin" },
			F = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Боитесь ли вы умереть?",
				-1
			),
			Q = Object(c["f"])(" Да "),
			I = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			G = Object(c["f"])(" Нет "),
			C = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			L = Object(c["g"])("p", { class: "test__number" }, "Вопрос 1-5", -1),
			V = { key: 1, class: "test" },
			A = Object(c["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(c["g"])(
						"p",
						{ class: "test-intro__text" },
						" Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы. "
					),
				],
				-1
			),
			B = { class: "test__content" },
			Y = Object(c["g"])(
				"p",
				{ class: "test__text" },
				" Когда Вы чувствуете себя наиболее комфортно? ",
				-1
			),
			q = Object(c["f"])(" Утро "),
			M = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			E = Object(c["f"])(" День "),
			N = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			P = Object(c["f"])(" Вечер "),
			R = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			J = Object(c["f"])(" Ночь "),
			H = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			U = Object(c["g"])("p", { class: "test__number" }, "Вопрос 2-5", -1),
			z = { key: 2, class: "test" },
			K = Object(c["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(c["g"])(
						"p",
						{ class: "test-intro__text" },
						" Уже совсем скоро Вы узнаете много интересного о своем будущем! "
					),
				],
				-1
			),
			X = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Укажите свою дату рождения",
				-1
			),
			$ = { class: "test__form", novalidate: "" },
			W = Object(c["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_day" },
				null,
				-1
			),
			Z = Object(c["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_mounth" },
				null,
				-1
			),
			tt = Object(c["g"])(
				"img",
				{ src: "https://i.imgur.com/rSmuj0m.png", class: "arrow_year" },
				null,
				-1
			),
			et = Object(c["f"])(" Далее "),
			st = { key: 0, class: "sparcle moving" },
			ct = Object(c["g"])("p", { class: "test__number" }, "Вопрос 3-5", -1),
			it = { key: 3, class: "load", id: "floatingBars" },
			nt = Object(c["g"])("p", { class: "load__text" }, "Loading", -1),
			at = { key: 4, class: "test" },
			ot = Object(c["g"])(
				"div",
				{ class: "test-intro" },
				[
					Object(c["g"])(
						"p",
						{ class: "test-intro__text" },
						" Смерть родного человека — одно из тяжелейших испытаний в жизни каждого из нас! "
					),
				],
				-1
			),
			lt = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Снятся ли Вам умершие люди?",
				-1
			),
			rt = Object(c["f"])(" Да "),
			ut = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			bt = Object(c["f"])(" Нет "),
			dt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			Ot = Object(c["f"])(" Иногда "),
			jt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			pt = Object(c["g"])("p", { class: "test__number" }, "Вопрос 4-5", -1),
			gt = { key: 5, class: "test" },
			ft = { class: "test-intro" },
			ht = { class: "message-box" },
			_t = { class: "message-box__rectangle" },
			mt = { key: 0, class: "test-intro__text test-intro__text_black" },
			vt = { key: 1, class: "test-intro__text test-intro__text_black" },
			yt = { key: 2, class: "test-intro__text test-intro__text_black" },
			kt = Object(c["g"])("div", { class: "message-box__polygon" }, null, -1),
			xt = Object(c["g"])(
				"p",
				{ class: "test__text" },
				" Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас? ",
				-1
			),
			St = Object(c["f"])(" Да "),
			Tt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			wt = Object(c["f"])(" Затрудняюсь ответить "),
			Dt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			Ft = Object(c["g"])("p", { class: "test__number" }, "Вопрос 5-5", -1),
			Qt = { key: 6, class: "test-intro-final" },
			It = Object(c["e"])(
				'<div class="message-box message-box_final"><div class="message-box__rectangle message-box__rectangle_final"><p class="test-intro-final__title"> Спасибо за Ваши ответы! <strong>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</strong></p></div><div class="message-box__polygon message-box__polygon_final"></div></div><p class="test-intro-final__text"> Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. </p>',
				2
			),
			Gt = { class: "test-intro-final__info" },
			Ct = { class: "uppercase strong" },
			Lt = Object(c["f"])(
				" Вам надо быть готовым, чтобы последствия не оказались необратимыми. "
			),
			Vt = Object(c["g"])(
				"p",
				{ class: "test-intro-final__text test-intro-final__text_buttom" },
				" Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию! ",
				-1
			),
			At = Object(c["f"])(" Позвонить и прослушать "),
			Bt = Object(c["g"])("div", { class: "sparcle_big moving" }, null, -1),
			Yt = Object(c["g"])(
				"p",
				{ class: "test-intro-final__footer-text" },
				" TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",
				-1
			);
		function qt(t, e, s, i, n, a) {
			var o = Object(c["j"])("LoadList"),
				l = Object(c["j"])("ApiInfo");
			return (
				Object(c["h"])(),
				Object(c["c"])(
					c["a"],
					null,
					[
						n.isFirstQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", D, [
									F,
									Object(c["g"])(
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
									Object(c["g"])(
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
									L,
							  ]))
							: Object(c["d"])("", !0),
						n.isSecondQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", V, [
									A,
									Object(c["g"])("div", B, [
										Y,
										Object(c["g"])(
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
											[q, M]
										),
										Object(c["g"])(
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
											[E, N]
										),
										Object(c["g"])(
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
											[P, R]
										),
										Object(c["g"])(
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
											[J, H]
										),
										U,
									]),
							  ]))
							: Object(c["d"])("", !0),
						n.isThirdQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", z, [
									K,
									X,
									Object(c["g"])("form", $, [
										Object(c["g"])(
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
													border: n.isDayValid ? "1px solid red" : "none",
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
										W,
										Object(c["g"])(
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
													border: n.isMountValid ? "1px solid red" : "none",
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
										Object(c["g"])(
											"input",
											{
												class: "test__input",
												type: "number",
												min: "1910",
												max: n.currentYear - 18,
												id: "year",
												name: "year",
												placeholder: "Год",
												style: {
													border: n.isYearValid ? "1px solid red" : "none",
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
										Object(c["g"])(
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
													? Object(c["d"])("", !0)
													: (Object(c["h"])(), Object(c["c"])("div", st)),
											],
											8,
											["disabled"]
										),
									]),
									ct,
							  ]))
							: Object(c["d"])("", !0),
						n.isLoadShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", it, [Object(c["g"])(o), nt]))
							: Object(c["d"])("", !0),
						n.isFourthQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", at, [
									ot,
									lt,
									Object(c["g"])(
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
										[rt, ut]
									),
									Object(c["g"])(
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
									Object(c["g"])(
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
										[Ot, jt]
									),
									pt,
							  ]))
							: Object(c["d"])("", !0),
						n.isFifthQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", gt, [
									Object(c["g"])("div", ft, [
										Object(c["g"])("div", ht, [
											Object(c["g"])("div", _t, [
												n.currentYear - n.yearOfBorn < 36
													? (Object(c["h"])(),
													  Object(c["c"])(
															"p",
															mt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. "
													  ))
													: Object(c["d"])("", !0),
												n.currentYear - n.yearOfBorn < 46 &&
												n.currentYear - n.yearOfBorn > 35
													? (Object(c["h"])(),
													  Object(c["c"])(
															"p",
															vt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка. "
													  ))
													: Object(c["d"])("", !0),
												n.currentYear - n.yearOfBorn > 46
													? (Object(c["h"])(),
													  Object(c["c"])(
															"p",
															yt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей. "
													  ))
													: Object(c["d"])("", !0),
											]),
											kt,
										]),
									]),
									xt,
									Object(c["g"])(
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
										[St, Tt]
									),
									Object(c["g"])(
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
										[wt, Dt]
									),
									Ft,
							  ]))
							: Object(c["d"])("", !0),
						n.isTestFinished
							? (Object(c["h"])(),
							  Object(c["c"])("div", Qt, [
									It,
									Object(c["g"])("p", Gt, [
										Object(c["g"])(
											"span",
											Ct,
											"Первое значимое событие может произойти уже " +
												Object(c["k"])(n.nextDay) +
												",",
											1
										),
										Lt,
									]),
									Vt,
									Object(c["g"])(
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
										[At, Bt]
									),
									Yt,
							  ]))
							: Object(c["d"])("", !0),
						n.isCallButtonClicked
							? (Object(c["h"])(), Object(c["c"])(l, { key: 7 }))
							: Object(c["d"])("", !0),
					],
					64
				)
			);
		}
		var Mt = { class: "load__bar" },
			Et = Object(c["e"])(
				'<li id="rotateG_01" class="blockG"></li><li id="rotateG_02" class="blockG"></li><li id="rotateG_03" class="blockG"></li><li id="rotateG_04" class="blockG"></li><li id="rotateG_05" class="blockG"></li><li id="rotateG_06" class="blockG"></li><li id="rotateG_07" class="blockG"></li><li id="rotateG_08" class="blockG"></li><li id="rotateG_09" class="blockG"></li><li id="rotateG_10" class="blockG"></li><li id="rotateG_11" class="blockG"></li><li id="rotateG_12" class="blockG"></li>',
				12
			);
		function Nt(t, e, s, i, n, a) {
			return Object(c["h"])(), Object(c["c"])("ul", Mt, [Et]);
		}
		var Pt = { name: "LoadList" };
		s("7e5d");
		Pt.render = Nt;
		var Rt = Pt,
			Jt = (s("b0c0"), { class: "api-info" }),
			Ht = { key: 0, class: "api-info__text" },
			Ut = { key: 1, class: "api-info__text" },
			zt = { key: 2, class: "api-info__text" },
			Kt = { key: 3, class: "api-info__text" },
			Xt = { key: 4, class: "api-info__text" },
			$t = { key: 5, class: "api-info__text" },
			Wt = { key: 6, class: "api-info__text" };
		function Zt(t, e, s, i, n, a) {
			return (
				Object(c["h"])(),
				Object(c["c"])("div", Jt, [
					(Object(c["h"])(!0),
					Object(c["c"])(
						c["a"],
						null,
						Object(c["i"])(n.list, function(t, e) {
							return (
								Object(c["h"])(),
								Object(c["c"])("div", { key: e }, [
									"created" === e || "edited" === e
										? (Object(c["h"])(),
										  Object(c["c"])(
												"p",
												Ht,
												Object(c["k"])(e) +
													" : " +
													Object(c["k"])(a.getDate(t)),
												1
										  ))
										: "url" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", Ut, [
												Object(c["f"])(Object(c["k"])(e) + " : ", 1),
												Object(c["g"])(
													"a",
													{ href: t, class: "api-info__link" },
													"Link to API",
													8,
													["href"]
												),
										  ]))
										: "homeworld" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", zt, [
												Object(c["f"])(Object(c["k"])(e) + " : ", 1),
												Object(c["g"])(
													"a",
													{ href: t, class: "api-info__link" },
													Object(c["k"])(a.getInfoFromApi(t).name),
													9,
													["href"]
												),
										  ]))
										: "films" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", Kt, [
												Object(c["f"])(Object(c["k"])(e) + " : ", 1),
												(Object(c["h"])(!0),
												Object(c["c"])(
													c["a"],
													null,
													Object(c["i"])(t, function(t) {
														return (
															Object(c["h"])(),
															Object(c["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(c["k"])(
																	a.getInfoFromApi(t).title + ", "
																),
																9,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: "vehicles" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", Xt, [
												Object(c["f"])(Object(c["k"])(e) + " : ", 1),
												(Object(c["h"])(!0),
												Object(c["c"])(
													c["a"],
													null,
													Object(c["i"])(t, function(t) {
														return (
															Object(c["h"])(),
															Object(c["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(c["k"])(a.getInfoFromApi(t).name + ", "),
																9,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: "starships" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", $t, [
												Object(c["f"])(Object(c["k"])(e) + " : ", 1),
												(Object(c["h"])(!0),
												Object(c["c"])(
													c["a"],
													null,
													Object(c["i"])(t, function(t) {
														return (
															Object(c["h"])(),
															Object(c["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(c["k"])(a.getInfoFromApi(t).name + ", "),
																9,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: (Object(c["h"])(),
										  Object(c["c"])(
												"p",
												Wt,
												Object(c["k"])(e) + " : " + Object(c["k"])(t),
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
		var te = {
			name: "ApiInfo",
			data: function() {
				return { list: "" };
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
					var c = t.getFullYear() % 100;
					return c < 10 && (c = "0" + c), e + "." + s + "." + c;
				},
				getInfoFromApi: function(t) {
					var e = this.requestApi(t);
					return e;
				},
				requestApi: function(t) {
					var e = new XMLHttpRequest();
					if ((e.open("GET", t, !1), e.send(), 200 == e.status)) {
						var s = JSON.parse(e.responseText);
						return s;
					}
					console.log(e.status + ": " + e.statusText);
				},
			},
			created: function() {
				var t = this.requestApi("https://swapi.dev/api/people/1/");
				this.list = t;
			},
		};
		s("b868");
		te.render = Zt;
		var ee = te,
			se = {
				name: "Test",
				components: { LoadList: Rt, ApiInfo: ee },
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
						var c = t.getFullYear() % 100;
						return c < 10 && (c = "0" + c), e + "." + s + "." + c;
					},
				},
			};
		s("821e");
		se.render = qt;
		var ce = se,
			ie = {
				name: "App",
				components: { Test: ce },
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
						c = document.querySelector(".footer");
					document.addEventListener("scroll", function() {
						var i = window.pageYOffset;
						i > t.offsetTop - 600 && t.classList.add("animation"),
							i > e.offsetTop - 600 && e.classList.add("animation"),
							i > s.offsetTop - 600 && s.classList.add("animation"),
							i > c.offsetTop - 800 && c.classList.add("animation");
					});
				},
			};
		s("76a5");
		ie.render = w;
		var ne = ie;
		Object(c["b"])(ne).mount("#app");
	},
	"76a5": function(t, e, s) {
		"use strict";
		s("44c1");
	},
	"7e5d": function(t, e, s) {
		"use strict";
		s("c04a");
	},
	8186: function(t, e, s) {},
	"821e": function(t, e, s) {
		"use strict";
		s("8186");
	},
	b868: function(t, e, s) {
		"use strict";
		s("ecd9");
	},
	c04a: function(t, e, s) {},
	ecd9: function(t, e, s) {},
});
//# sourceMappingURL=app.273a424d.js.map

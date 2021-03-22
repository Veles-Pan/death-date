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
	"4fb9": function(t, e, s) {
		"use strict";
		s("a693");
	},
	"56d7": function(t, e, s) {
		"use strict";
		s.r(e);
		s("e260"), s("e6cf"), s("cca6"), s("a79d");
		var c = s("7a23"),
			i = s("e7de"),
			n = s.n(i),
			a = s("67f2"),
			o = s.n(a),
			l = { key: 0, class: "header" },
			r = Object(c["g"])(
				"p",
				{ class: "header__title" },
				"Лучшие астрологи и экстрасенсы Румынии",
				-1
			),
			u = Object(c["g"])(
				"p",
				{ class: "header__subtitle" },
				"Точность прогноза: 97%",
				-1
			),
			b = { class: "content" },
			d = { key: 0, class: "intro" },
			O = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/YgN3YkS.png",
					alt: "интро",
					class: "intro__image",
				},
				null,
				-1
			),
			j = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/SHmgT9G.png",
					alt: "глаз",
					class: "intro__subimage",
				},
				null,
				-1
			),
			f = Object(c["g"])(
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
			p = Object(c["f"])(" Да "),
			g = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			h = Object(c["g"])(
				"button",
				{ class: "intro__button intro__button_reject" },
				[
					Object(c["f"])(" Нет "),
					Object(c["g"])("div", { class: "sparcle moving" }),
				],
				-1
			),
			_ = Object(c["g"])(
				"div",
				{ class: "intro__subtitle" },
				"Онлайн предсказание",
				-1
			),
			v = { key: 1, class: "quote" },
			m = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/bzEfLLr.png",
					alt: "цитата",
					class: "quote__image",
				},
				null,
				-1
			),
			y = Object(c["g"])(
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
			k = { key: 2, class: "cover" },
			x = Object(c["g"])(
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
			T = Object(c["g"])(
				"img",
				{
					src: "https://i.imgur.com/00GFHMJ.jpg",
					alt: "женщина",
					class: "cover__image",
				},
				null,
				-1
			),
			S = { key: 1, class: "footer" },
			w = Object(c["g"])(
				"img",
				{ class: "footer__image", src: n.a, alt: "руны" },
				null,
				-1
			),
			D = Object(c["g"])(
				"p",
				{ class: "footer__text" },
				" Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут. ",
				-1
			),
			F = Object(c["g"])(
				"img",
				{ class: "footer__image", src: o.a, alt: "руны" },
				null,
				-1
			);
		function Q(t, e, s, i, n, a) {
			var o = Object(c["j"])("Test");
			return (
				Object(c["h"])(),
				Object(c["c"])(
					c["a"],
					null,
					[
						n.isTestStarted
							? Object(c["d"])("", !0)
							: (Object(c["h"])(), Object(c["c"])("header", l, [r, u])),
						Object(c["g"])("main", b, [
							n.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(),
								  Object(c["c"])("article", d, [
										O,
										j,
										f,
										Object(c["g"])(
											"button",
											{
												class: "intro__button intro__button_accept",
												onClick:
													e[1] ||
													(e[1] = function() {
														return (
															a.scrollDown && a.scrollDown.apply(a, arguments)
														);
													}),
											},
											[p, g]
										),
										h,
										_,
								  ])),
							n.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(), Object(c["c"])("article", v, [m, y])),
							n.isTestStarted
								? Object(c["d"])("", !0)
								: (Object(c["h"])(), Object(c["c"])("article", k, [x, T])),
							Object(c["g"])(o),
						]),
						n.isTestStarted
							? Object(c["d"])("", !0)
							: (Object(c["h"])(), Object(c["c"])("footer", S, [w, D, F])),
					],
					64
				)
			);
		}
		var I = { key: 0, class: "test test_margin" },
			G = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Боитесь ли вы умереть?",
				-1
			),
			C = Object(c["f"])(" Да "),
			L = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			V = Object(c["g"])(
				"button",
				{ class: "test__button" },
				[
					Object(c["f"])(" Нет "),
					Object(c["g"])("div", { class: "sparcle moving" }),
				],
				-1
			),
			A = Object(c["g"])("p", { class: "test__number" }, "Вопрос 1-5", -1),
			B = { key: 1, class: "test" },
			Y = Object(c["g"])(
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
			q = { class: "test__content" },
			M = Object(c["g"])(
				"p",
				{ class: "test__text" },
				" Когда Вы чувствуете себя наиболее комфортно? ",
				-1
			),
			E = Object(c["f"])(" Утро "),
			N = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			P = Object(c["f"])(" День "),
			R = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			J = Object(c["f"])(" Вечер "),
			H = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			U = Object(c["f"])(" Ночь "),
			z = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			X = Object(c["g"])("p", { class: "test__number" }, "Вопрос 2-5", -1),
			$ = { key: 2, class: "test" },
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
			W = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Укажите свою дату рождения",
				-1
			),
			Z = { class: "test__form", novalidate: "" },
			tt = Object(c["f"])(" Далее "),
			et = { key: 0, class: "sparcle moving" },
			st = Object(c["g"])("p", { class: "test__number" }, "Вопрос 3-5", -1),
			ct = { key: 3, class: "load", id: "floatingBars" },
			it = Object(c["g"])("p", { class: "load__text" }, "Loading", -1),
			nt = { key: 4, class: "test" },
			at = Object(c["g"])(
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
			ot = Object(c["g"])(
				"p",
				{ class: "test__text" },
				"Снятся ли Вам умершие люди?",
				-1
			),
			lt = Object(c["f"])(" Да "),
			rt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			ut = Object(c["f"])(" Нет "),
			bt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			dt = Object(c["f"])(" Иногда "),
			Ot = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			jt = Object(c["g"])("p", { class: "test__number" }, "Вопрос 4-5", -1),
			ft = { key: 5, class: "test" },
			pt = { class: "test-intro" },
			gt = { class: "message-box" },
			ht = { class: "message-box__rectangle" },
			_t = { key: 0, class: "test-intro__text test-intro__text_black" },
			vt = { key: 1, class: "test-intro__text test-intro__text_black" },
			mt = { key: 2, class: "test-intro__text test-intro__text_black" },
			yt = Object(c["g"])("div", { class: "message-box__polygon" }, null, -1),
			kt = Object(c["g"])(
				"p",
				{ class: "test__text" },
				" Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас? ",
				-1
			),
			xt = Object(c["f"])(" Да "),
			Tt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			St = Object(c["f"])(" Затрудняюсь ответить "),
			wt = Object(c["g"])("div", { class: "sparcle moving" }, null, -1),
			Dt = Object(c["g"])("p", { class: "test__number" }, "Вопрос 5-5", -1),
			Ft = { key: 6, class: "test-intro-final" },
			Qt = Object(c["e"])(
				'<div class="message-box message-box_final"><div class="message-box__rectangle message-box__rectangle_final"><p class="test-intro-final__title"> Спасибо за Ваши ответы! <strong>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</strong></p></div><div class="message-box__polygon message-box__polygon_final"></div></div><p class="test-intro-final__text"> Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. </p>',
				2
			),
			It = { class: "test-intro-final__info" },
			Gt = { class: "uppercase strong" },
			Ct = Object(c["f"])(
				" Вам надо быть готовым, чтобы последствия не оказались необратимыми. "
			),
			Lt = Object(c["g"])(
				"p",
				{ class: "test-intro-final__text test-intro-final__text_buttom" },
				" Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию! ",
				-1
			),
			Vt = Object(c["f"])(" Позвонить и прослушать "),
			At = Object(c["g"])("div", { class: "sparcle_big moving" }, null, -1),
			Bt = Object(c["g"])(
				"p",
				{ class: "test-intro-final__footer-text" },
				" TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",
				-1
			);
		function Yt(t, e, s, i, n, a) {
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
							  Object(c["c"])("div", I, [
									G,
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
										[C, L]
									),
									V,
									A,
							  ]))
							: Object(c["d"])("", !0),
						n.isSecondQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", B, [
									Y,
									Object(c["g"])("div", q, [
										M,
										Object(c["g"])(
											"button",
											{
												class: "test__button",
												onClick:
													e[2] ||
													(e[2] = function() {
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
													e[3] ||
													(e[3] = function() {
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
													e[4] ||
													(e[4] = function() {
														return (
															a.getThirdQuestion &&
															a.getThirdQuestion.apply(a, arguments)
														);
													}),
											},
											[J, H]
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
											[U, z]
										),
										X,
									]),
							  ]))
							: Object(c["d"])("", !0),
						n.isThirdQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", $, [
									K,
									W,
									Object(c["g"])("form", Z, [
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
													e[6] ||
													(e[6] = function() {
														return (
															a.hasValidDay && a.hasValidDay.apply(a, arguments)
														);
													}),
												required: "",
											},
											null,
											36
										),
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
													e[7] ||
													(e[7] = function() {
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
													e[8] ||
													(e[8] = function() {
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
										Object(c["g"])(
											"button",
											{
												type: "button",
												class: "test__button",
												onClick:
													e[9] ||
													(e[9] = function() {
														return (
															a.getFourthdQuestion &&
															a.getFourthdQuestion.apply(a, arguments)
														);
													}),
												disabled: a.hasDisabledButton(),
											},
											[
												tt,
												a.hasDisabledButton()
													? Object(c["d"])("", !0)
													: (Object(c["h"])(), Object(c["c"])("div", et)),
											],
											8,
											["disabled"]
										),
									]),
									st,
							  ]))
							: Object(c["d"])("", !0),
						n.isLoadShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", ct, [Object(c["g"])(o), it]))
							: Object(c["d"])("", !0),
						n.isFourthQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", nt, [
									at,
									ot,
									Object(c["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[10] ||
												(e[10] = function() {
													return (
														a.getFifthQuestion &&
														a.getFifthQuestion.apply(a, arguments)
													);
												}),
										},
										[lt, rt]
									),
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
										[ut, bt]
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
										[dt, Ot]
									),
									jt,
							  ]))
							: Object(c["d"])("", !0),
						n.isFifthQuestionShown
							? (Object(c["h"])(),
							  Object(c["c"])("div", ft, [
									Object(c["g"])("div", pt, [
										Object(c["g"])("div", gt, [
											Object(c["g"])("div", ht, [
												n.currentYear - n.yearOfBorn < 36
													? (Object(c["h"])(),
													  Object(c["c"])(
															"p",
															_t,
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
															mt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей. "
													  ))
													: Object(c["d"])("", !0),
											]),
											yt,
										]),
									]),
									kt,
									Object(c["g"])(
										"button",
										{
											class: "test__button",
											onClick:
												e[13] ||
												(e[13] = function() {
													return (
														a.finishTest && a.finishTest.apply(a, arguments)
													);
												}),
										},
										[xt, Tt]
									),
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
										[St, wt]
									),
									Dt,
							  ]))
							: Object(c["d"])("", !0),
						n.isTestFinished
							? (Object(c["h"])(),
							  Object(c["c"])("div", Ft, [
									Qt,
									Object(c["g"])("p", It, [
										Object(c["g"])(
											"span",
											Gt,
											"Первое значимое событие может произойти уже " +
												Object(c["k"])(n.nextDay) +
												",",
											1
										),
										Ct,
									]),
									Lt,
									Object(c["g"])(
										"button",
										{
											class: "test-intro-final__button",
											onClick:
												e[15] ||
												(e[15] = function() {
													return (
														a.clickFinalButton &&
														a.clickFinalButton.apply(a, arguments)
													);
												}),
										},
										[Vt, At]
									),
									Bt,
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
		var qt = { class: "load__bar" },
			Mt = Object(c["e"])(
				'<li id="rotateG_01" class="blockG"></li><li id="rotateG_02" class="blockG"></li><li id="rotateG_03" class="blockG"></li><li id="rotateG_04" class="blockG"></li><li id="rotateG_05" class="blockG"></li><li id="rotateG_06" class="blockG"></li><li id="rotateG_07" class="blockG"></li><li id="rotateG_08" class="blockG"></li><li id="rotateG_09" class="blockG"></li><li id="rotateG_10" class="blockG"></li><li id="rotateG_11" class="blockG"></li><li id="rotateG_12" class="blockG"></li>',
				12
			);
		function Et(t, e, s, i, n, a) {
			return Object(c["h"])(), Object(c["c"])("ul", qt, [Mt]);
		}
		var Nt = { name: "LoadList" };
		s("7e5d");
		Nt.render = Et;
		var Pt = Nt,
			Rt = (s("b0c0"), { class: "api-info" }),
			Jt = { key: 0, class: "api-info__text" },
			Ht = { key: 1, class: "api-info__text" },
			Ut = { key: 2, class: "api-info__text" },
			zt = { key: 3, class: "api-info__text" },
			Xt = { key: 4, class: "api-info__text" },
			$t = { key: 5, class: "api-info__text" },
			Kt = { key: 6, class: "api-info__text" };
		function Wt(t, e, s, i, n, a) {
			return (
				Object(c["h"])(),
				Object(c["c"])("div", Rt, [
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
												Jt,
												Object(c["k"])(e) +
													" : " +
													Object(c["k"])(a.getDate(t)),
												1
										  ))
										: "url" === e
										? (Object(c["h"])(),
										  Object(c["c"])("p", Ht, [
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
										  Object(c["c"])("p", Ut, [
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
										  Object(c["c"])("p", zt, [
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
												Kt,
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
		var Zt = {
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
		Zt.render = Wt;
		var te = Zt,
			ee = {
				name: "Test",
				components: { LoadList: Pt, ApiInfo: te },
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
		s("8285");
		ee.render = Yt;
		var se = ee,
			ce = {
				name: "App",
				components: { Test: se },
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
		s("4fb9");
		ce.render = Q;
		var ie = ce;
		Object(c["b"])(ie).mount("#app");
	},
	"67f2": function(t, e, s) {
		t.exports = s.p + "img/rune2.4ce97f42.svg";
	},
	"7e5d": function(t, e, s) {
		"use strict";
		s("c04a");
	},
	8285: function(t, e, s) {
		"use strict";
		s("a369");
	},
	a369: function(t, e, s) {},
	a693: function(t, e, s) {},
	b868: function(t, e, s) {
		"use strict";
		s("ecd9");
	},
	c04a: function(t, e, s) {},
	e7de: function(t, e, s) {
		t.exports = s.p + "img/rune1.5a5552c6.svg";
	},
	ecd9: function(t, e, s) {},
});
//# sourceMappingURL=app.d3b5aed8.js.map

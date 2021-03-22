(function(t) {
	function e(e) {
		for (
			var n, a, o = e[0], l = e[1], r = e[2], u = 0, d = [];
			u < o.length;
			u++
		)
			(a = o[u]),
				Object.prototype.hasOwnProperty.call(c, a) && c[a] && d.push(c[a][0]),
				(c[a] = 0);
		for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
		b && b(e);
		while (d.length) d.shift()();
		return i.push.apply(i, r || []), s();
	}
	function s() {
		for (var t, e = 0; e < i.length; e++) {
			for (var s = i[e], n = !0, o = 1; o < s.length; o++) {
				var l = s[o];
				0 !== c[l] && (n = !1);
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
	var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		l = o.push.bind(o);
	(o.push = e), (o = o.slice());
	for (var r = 0; r < o.length; r++) e(o[r]);
	var b = l;
	i.push([0, "chunk-vendors"]), s();
})({
	0: function(t, e, s) {
		t.exports = s("56d7");
	},
	"43f6": function(t, e, s) {},
	"44cd": function(t, e, s) {
		"use strict";
		s("43f6");
	},
	"56d7": function(t, e, s) {
		"use strict";
		s.r(e);
		s("e260"), s("e6cf"), s("cca6"), s("a79d");
		var n = s("7a23"),
			c = s("9ae1"),
			i = s.n(c),
			a = s("ed29"),
			o = s.n(a),
			l = s("961b"),
			r = s.n(l),
			b = s("8db7"),
			u = s.n(b),
			d = s("e7de"),
			O = s.n(d),
			j = s("67f2"),
			f = s.n(j),
			p = { key: 0, class: "header" },
			g = Object(n["g"])(
				"p",
				{ class: "header__title" },
				"Лучшие астрологи и экстрасенсы Румынии",
				-1
			),
			h = Object(n["g"])(
				"p",
				{ class: "header__subtitle" },
				"Точность прогноза: 97%",
				-1
			),
			_ = { class: "content" },
			v = { key: 0, class: "intro" },
			m = Object(n["g"])(
				"img",
				{ src: i.a, alt: "интро", class: "intro__image" },
				null,
				-1
			),
			y = Object(n["g"])(
				"img",
				{ src: o.a, alt: "глаз", class: "intro__subimage" },
				null,
				-1
			),
			k = Object(n["g"])(
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
			x = Object(n["f"])(" Да "),
			T = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			S = Object(n["g"])(
				"button",
				{ class: "intro__button intro__button_reject" },
				[
					Object(n["f"])(" Нет "),
					Object(n["g"])("div", { class: "sparcle moving" }),
				],
				-1
			),
			w = Object(n["g"])(
				"div",
				{ class: "intro__subtitle" },
				"Онлайн предсказание",
				-1
			),
			D = { key: 1, class: "quote" },
			Q = Object(n["g"])(
				"img",
				{ src: r.a, alt: "цитата", class: "quote__image" },
				null,
				-1
			),
			F = Object(n["g"])(
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
			I = { key: 2, class: "cover" },
			G = Object(n["g"])(
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
			C = Object(n["g"])(
				"img",
				{ src: u.a, alt: "женщина", class: "cover__image" },
				null,
				-1
			),
			L = { key: 1, class: "footer" },
			V = Object(n["g"])(
				"img",
				{ class: "footer__image", src: O.a, alt: "руны" },
				null,
				-1
			),
			A = Object(n["g"])(
				"p",
				{ class: "footer__text" },
				" Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут. ",
				-1
			),
			B = Object(n["g"])(
				"img",
				{ class: "footer__image", src: f.a, alt: "руны" },
				null,
				-1
			);
		function q(t, e, s, c, i, a) {
			var o = Object(n["j"])("Test");
			return (
				Object(n["h"])(),
				Object(n["c"])(
					n["a"],
					null,
					[
						i.isTestStarted
							? Object(n["d"])("", !0)
							: (Object(n["h"])(), Object(n["c"])("header", p, [g, h])),
						Object(n["g"])("main", _, [
							i.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(),
								  Object(n["c"])("article", v, [
										m,
										y,
										k,
										Object(n["g"])(
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
											[x, T]
										),
										S,
										w,
								  ])),
							i.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(), Object(n["c"])("article", D, [Q, F])),
							i.isTestStarted
								? Object(n["d"])("", !0)
								: (Object(n["h"])(), Object(n["c"])("article", I, [G, C])),
							Object(n["g"])(o),
						]),
						i.isTestStarted
							? Object(n["d"])("", !0)
							: (Object(n["h"])(), Object(n["c"])("footer", L, [V, A, B])),
					],
					64
				)
			);
		}
		var M = { key: 0, class: "test test_margin" },
			Y = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Боитесь ли вы умереть?",
				-1
			),
			E = Object(n["f"])(" Да "),
			N = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			P = Object(n["g"])(
				"button",
				{ class: "test__button" },
				[
					Object(n["f"])(" Нет "),
					Object(n["g"])("div", { class: "sparcle moving" }),
				],
				-1
			),
			R = Object(n["g"])("p", { class: "test__number" }, "Вопрос 1-5", -1),
			J = { key: 1, class: "test" },
			U = Object(n["g"])(
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
			H = { class: "test__content" },
			X = Object(n["g"])(
				"p",
				{ class: "test__text" },
				" Когда Вы чувствуете себя наиболее комфортно? ",
				-1
			),
			$ = Object(n["f"])(" Утро "),
			z = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			K = Object(n["f"])(" День "),
			W = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			Z = Object(n["f"])(" Вечер "),
			tt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			et = Object(n["f"])(" Ночь "),
			st = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			nt = Object(n["g"])("p", { class: "test__number" }, "Вопрос 2-5", -1),
			ct = { key: 2, class: "test" },
			it = Object(n["g"])(
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
			at = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Укажите свою дату рождения",
				-1
			),
			ot = { class: "test__form", novalidate: "" },
			lt = Object(n["f"])(" Далее "),
			rt = { key: 0, class: "sparcle moving" },
			bt = Object(n["g"])("p", { class: "test__number" }, "Вопрос 3-5", -1),
			ut = { key: 3, class: "load", id: "floatingBars" },
			dt = Object(n["g"])("p", { class: "load__text" }, "Loading", -1),
			Ot = { key: 4, class: "test" },
			jt = Object(n["g"])(
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
			ft = Object(n["g"])(
				"p",
				{ class: "test__text" },
				"Снятся ли Вам умершие люди?",
				-1
			),
			pt = Object(n["f"])(" Да "),
			gt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			ht = Object(n["f"])(" Нет "),
			_t = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			vt = Object(n["f"])(" Иногда "),
			mt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			yt = Object(n["g"])("p", { class: "test__number" }, "Вопрос 4-5", -1),
			kt = { key: 5, class: "test" },
			xt = { class: "test-intro" },
			Tt = { class: "message-box" },
			St = { class: "message-box__rectangle" },
			wt = { key: 0, class: "test-intro__text test-intro__text_black" },
			Dt = { key: 1, class: "test-intro__text test-intro__text_black" },
			Qt = { key: 2, class: "test-intro__text test-intro__text_black" },
			Ft = Object(n["g"])("div", { class: "message-box__polygon" }, null, -1),
			It = Object(n["g"])(
				"p",
				{ class: "test__text" },
				" Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас? ",
				-1
			),
			Gt = Object(n["f"])(" Да "),
			Ct = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			Lt = Object(n["f"])(" Затрудняюсь ответить "),
			Vt = Object(n["g"])("div", { class: "sparcle moving" }, null, -1),
			At = Object(n["g"])("p", { class: "test__number" }, "Вопрос 5-5", -1),
			Bt = { key: 6, class: "test-intro-final" },
			qt = Object(n["e"])(
				'<div class="message-box message-box_final"><div class="message-box__rectangle message-box__rectangle_final"><p class="test-intro-final__title"> Спасибо за Ваши ответы! <strong>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</strong></p></div><div class="message-box__polygon message-box__polygon_final"></div></div><p class="test-intro-final__text"> Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. </p>',
				2
			),
			Mt = { class: "test-intro-final__info" },
			Yt = { class: "uppercase strong" },
			Et = Object(n["f"])(
				" Вам надо быть готовым, чтобы последствия не оказались необратимыми. "
			),
			Nt = Object(n["g"])(
				"p",
				{ class: "test-intro-final__text test-intro-final__text_buttom" },
				" Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию! ",
				-1
			),
			Pt = Object(n["f"])(" Позвонить и прослушать "),
			Rt = Object(n["g"])("div", { class: "sparcle_big moving" }, null, -1),
			Jt = Object(n["g"])(
				"p",
				{ class: "test-intro-final__footer-text" },
				" TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, ",
				-1
			);
		function Ut(t, e, s, c, i, a) {
			var o = Object(n["j"])("LoadList"),
				l = Object(n["j"])("ApiInfo");
			return (
				Object(n["h"])(),
				Object(n["c"])(
					n["a"],
					null,
					[
						i.isFirstQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", M, [
									Y,
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
										[E, N]
									),
									P,
									R,
							  ]))
							: Object(n["d"])("", !0),
						i.isSecondQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", J, [
									U,
									Object(n["g"])("div", H, [
										X,
										Object(n["g"])(
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
											[$, z]
										),
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
											[K, W]
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
											[Z, tt]
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
											[et, st]
										),
										nt,
									]),
							  ]))
							: Object(n["d"])("", !0),
						i.isThirdQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", ct, [
									it,
									at,
									Object(n["g"])("form", ot, [
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
										Object(n["g"])(
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
												lt,
												a.hasDisabledButton()
													? Object(n["d"])("", !0)
													: (Object(n["h"])(), Object(n["c"])("div", rt)),
											],
											8,
											["disabled"]
										),
									]),
									bt,
							  ]))
							: Object(n["d"])("", !0),
						i.isLoadShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", ut, [Object(n["g"])(o), dt]))
							: Object(n["d"])("", !0),
						i.isFourthQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", Ot, [
									jt,
									ft,
									Object(n["g"])(
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
										[pt, gt]
									),
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
										[ht, _t]
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
										[vt, mt]
									),
									yt,
							  ]))
							: Object(n["d"])("", !0),
						i.isFifthQuestionShown
							? (Object(n["h"])(),
							  Object(n["c"])("div", kt, [
									Object(n["g"])("div", xt, [
										Object(n["g"])("div", Tt, [
											Object(n["g"])("div", St, [
												i.currentYear - i.yearOfBorn < 36
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															wt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. "
													  ))
													: Object(n["d"])("", !0),
												i.currentYear - i.yearOfBorn < 46 &&
												i.currentYear - i.yearOfBorn > 35
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															Dt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка. "
													  ))
													: Object(n["d"])("", !0),
												i.currentYear - i.yearOfBorn > 46
													? (Object(n["h"])(),
													  Object(n["c"])(
															"p",
															Qt,
															" По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей. "
													  ))
													: Object(n["d"])("", !0),
											]),
											Ft,
										]),
									]),
									It,
									Object(n["g"])(
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
										[Gt, Ct]
									),
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
										[Lt, Vt]
									),
									At,
							  ]))
							: Object(n["d"])("", !0),
						i.isTestFinished
							? (Object(n["h"])(),
							  Object(n["c"])("div", Bt, [
									qt,
									Object(n["g"])("p", Mt, [
										Object(n["g"])(
											"span",
											Yt,
											"Первое значимое событие может произойти уже " +
												Object(n["k"])(i.nextDay) +
												",",
											1
										),
										Et,
									]),
									Nt,
									Object(n["g"])(
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
										[Pt, Rt]
									),
									Jt,
							  ]))
							: Object(n["d"])("", !0),
						i.isCallButtonClicked
							? (Object(n["h"])(), Object(n["c"])(l, { key: 7 }))
							: Object(n["d"])("", !0),
					],
					64
				)
			);
		}
		var Ht = { class: "load__bar" },
			Xt = Object(n["e"])(
				'<li id="rotateG_01" class="blockG"></li><li id="rotateG_02" class="blockG"></li><li id="rotateG_03" class="blockG"></li><li id="rotateG_04" class="blockG"></li><li id="rotateG_05" class="blockG"></li><li id="rotateG_06" class="blockG"></li><li id="rotateG_07" class="blockG"></li><li id="rotateG_08" class="blockG"></li><li id="rotateG_09" class="blockG"></li><li id="rotateG_10" class="blockG"></li><li id="rotateG_11" class="blockG"></li><li id="rotateG_12" class="blockG"></li>',
				12
			);
		function $t(t, e, s, c, i, a) {
			return Object(n["h"])(), Object(n["c"])("ul", Ht, [Xt]);
		}
		var zt = { name: "LoadList" };
		s("7e5d");
		zt.render = $t;
		var Kt = zt,
			Wt = (s("b0c0"), { class: "api-info" }),
			Zt = { key: 0, class: "api-info__text" },
			te = { key: 1, class: "api-info__text" },
			ee = { key: 2, class: "api-info__text" },
			se = { key: 3, class: "api-info__text" },
			ne = { key: 4, class: "api-info__text" },
			ce = { key: 5, class: "api-info__text" },
			ie = { key: 6, class: "api-info__text" };
		function ae(t, e, s, c, i, a) {
			return (
				Object(n["h"])(),
				Object(n["c"])("div", Wt, [
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
												Zt,
												Object(n["k"])(e) +
													" : " +
													Object(n["k"])(a.getDate(t)),
												1
										  ))
										: "url" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", te, [
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
										  Object(n["c"])("p", ee, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												Object(n["g"])(
													"a",
													{ href: t, class: "api-info__link" },
													Object(n["k"])(a.getInfoFromApi(t).name),
													9,
													["href"]
												),
										  ]))
										: "films" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", se, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(n["k"])(
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
										? (Object(n["h"])(),
										  Object(n["c"])("p", ne, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(n["k"])(a.getInfoFromApi(t).name + ", "),
																9,
																["href"]
															)
														);
													}),
													128
												)),
										  ]))
										: "starships" === e
										? (Object(n["h"])(),
										  Object(n["c"])("p", ce, [
												Object(n["f"])(Object(n["k"])(e) + " : ", 1),
												(Object(n["h"])(!0),
												Object(n["c"])(
													n["a"],
													null,
													Object(n["i"])(t, function(t) {
														return (
															Object(n["h"])(),
															Object(n["c"])(
																"a",
																{ key: t, href: t, class: "api-info__link" },
																Object(n["k"])(a.getInfoFromApi(t).name + ", "),
																9,
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
												ie,
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
		var oe = {
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
					var n = t.getFullYear() % 100;
					return n < 10 && (n = "0" + n), e + "." + s + "." + n;
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
		oe.render = ae;
		var le = oe,
			re = {
				name: "Test",
				components: { LoadList: Kt, ApiInfo: le },
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
		s("8285");
		re.render = Ut;
		var be = re,
			ue = {
				name: "App",
				components: { Test: be },
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
		s("44cd");
		ue.render = q;
		var de = ue;
		Object(n["b"])(de).mount("#app");
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
	"8db7": function(t, e, s) {
		t.exports = s.p + "img/image.e81bb63a.jpg";
	},
	"961b": function(t, e, s) {
		t.exports = s.p + "img/hands.4bbba02b.png";
	},
	"9ae1": function(t, e, s) {
		t.exports = s.p + "img/woman1.ca706394.png";
	},
	a369: function(t, e, s) {},
	b868: function(t, e, s) {
		"use strict";
		s("ecd9");
	},
	c04a: function(t, e, s) {},
	e7de: function(t, e, s) {
		t.exports = s.p + "img/rune1.5a5552c6.svg";
	},
	ecd9: function(t, e, s) {},
	ed29: function(t, e, s) {
		t.exports = s.p + "img/eyes.dca57b1f.svg";
	},
});
//# sourceMappingURL=app.1e9ed10a.js.map

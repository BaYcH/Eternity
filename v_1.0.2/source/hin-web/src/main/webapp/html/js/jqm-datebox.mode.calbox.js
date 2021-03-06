/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 */
(function(a) {
	a.extend(a.mobile.datebox.prototype.options, {
		themeDateToday : "a",
		themeDayHigh : "e",
		themeDatePick : "a",
		themeDateHigh : "e",
		themeDateHighAlt : "e",
		themeDate : "d",
		calHighToday : true,
		calHighPick : true,
		calShowDays : true,
		calOnlyMonth : false,
		calWeekMode : false,
		calWeekModeDay : 1,
		calWeekHigh : false,
		calControlGroup : false,
		calShowWeek : false,
		calUsePickers : false,
		calNoHeader : false,
		useTodayButton : false,
		useCollapsedBut : false,
		highDays : false,
		highDates : false,
		highDatesAlt : false,
		enableDates : false
	});
	a
			.extend(
					a.mobile.datebox.prototype,
					{
						_cal_gen : function(d, f, l, i, h) {
							var b = 0, e = 0, k = 1, g = 1, c = [], m = [], j = false;
							for (b = 0; b <= 5; b++) {
								if (j === false) {
									m = [];
									for (e = 0; e <= 6; e++) {
										if (b === 0 && e < d) {
											if (i === true) {
												m
														.push([
																f + (e - d) + 1,
																h - 1 ])
											} else {
												m.push(false)
											}
										} else {
											if (b > 3 && k > l) {
												if (i === true) {
													m.push([ g, h + 1 ]);
													g++
												} else {
													m.push(false)
												}
												j = true
											} else {
												m.push([ k, h ]);
												k++;
												if (k > l) {
													j = true
												}
											}
										}
									}
									c.push(m)
								}
							}
							return c
						},
						_cal_check : function(h, f, g, e) {
							var b = this, i = this.options, d = {}, c = new this._date(
									f, g, e, 0, 0, 0, 0).getDay();
							d.ok = true;
							d.iso = f + "-" + b._zPad(g + 1) + "-" + b._zPad(e);
							d.comp = parseInt(d.iso.replace(/-/g, ""), 10);
							d.theme = i.themeDate;
							if (a.isArray(i.enableDates)
									&& a.inArray(d.iso, i.enableDates) < 0) {
								d.ok = false
							} else {
								if (h.checkDates) {
									if ((i.afterToday === true && h.thisDate
											.comp() > d.comp)
											|| (i.beforeToday === true && h.thisDate
													.comp() < d.comp)
											|| (i.notToday === true && h.thisDate
													.comp() === d.comp)
											|| (i.maxDays !== false && h.maxDate
													.comp() < d.comp)
											|| (i.minDays !== false && h.minDate
													.comp() > d.comp)
											|| (a.isArray(i.blackDays) && a
													.inArray(c, i.blackDays) > -1)
											|| (a.isArray(i.blackDates) && a
													.inArray(d.iso,
															i.blackDates) > -1)) {
										d.ok = false
									}
								}
							}
							if (d.ok) {
								if (i.calHighPick && e === h.presetDay) {
									d.theme = i.themeDatePick
								} else {
									if (i.calHighToday
											&& d.comp === h.thisDate.comp()) {
										d.theme = i.themeDateToday
									} else {
										if (a.isArray(i.highDatesAlt)
												&& (a.inArray(d.iso,
														i.highDatesAlt) > -1)) {
											d.theme = i.themeDateHighAlt
										} else {
											if (a.isArray(i.highDates)
													&& (a.inArray(d.iso,
															i.highDates) > -1)) {
												d.theme = i.themeDateHigh
											} else {
												if (a.isArray(i.highDays)
														&& (a.inArray(c,
																i.highDays) > -1)) {
													d.theme = i.themeDayHigh
												}
											}
										}
									}
								}
							}
							return d
						}
					});
	a
			.extend(
					a.mobile.datebox.prototype._build,
					{
						calbox : function() {
							var j = this, c = this.options, e, b = false, f = "ui-datebox-", l = false, n = false, d = false, k = false, h = false;
							if (typeof j.d.intHTML !== "boolean") {
								j.d.intHTML.remove()
							}
							j.d.headerText = ((j._grabLabel() !== false) ? j
									._grabLabel() : j
									.__("titleDateDialogLabel"));
							j.d.intHTML = a("<span>");
							a(
									'<div class="'
											+ f
											+ 'gridheader"><div class="'
											+ f
											+ 'gridlabel"><h4>'
											+ j.__("monthsOfYear")[j.theDate
													.getMonth()] + " "
											+ j.theDate.getFullYear()
											+ "</h4></div></div>").appendTo(
									j.d.intHTML);
							a(
									"<div class='" + f + "gridplus"
											+ (j.__("isRTL") ? "-rtl" : "")
											+ "'><a href='#'>"
											+ j.__("nextMonth") + "</a></div>")
									.prependTo(
											j.d.intHTML.find("." + f
													+ "gridheader"))
									.buttonMarkup({
										theme : c.themeDate,
										icon : "arrow-r",
										inline : true,
										iconpos : "notext",
										corners : true,
										shadow : true
									}).on(c.clickEventAlt, function(i) {
										i.preventDefault();
										if (j.calNext) {
											if (j.theDate.getDate() > 28) {
												j.theDate.setDate(1)
											}
											j._offset("m", 1)
										}
									});
							a(
									"<div class='" + f + "gridminus"
											+ (j.__("isRTL") ? "-rtl" : "")
											+ "'><a href='#'>"
											+ j.__("prevMonth") + "</a></div>")
									.prependTo(
											j.d.intHTML.find("." + f
													+ "gridheader"))
									.buttonMarkup({
										theme : c.themeDate,
										icon : "arrow-l",
										inline : true,
										iconpos : "notext",
										corners : true,
										shadow : true
									}).on(c.clickEventAlt, function(i) {
										i.preventDefault();
										if (j.calPrev) {
											if (j.theDate.getDate() > 28) {
												j.theDate.setDate(1)
											}
											j._offset("m", -1)
										}
									});
							if (c.calNoHeader === true) {
								j.d.intHTML.find("." + f + "gridheader")
										.remove()
							}
							b = {
								today : -1,
								highlightDay : -1,
								presetDay : -1,
								startDay : j.__("calStartDay"),
								thisDate : new j._date(),
								maxDate : j.initDate.copy(),
								minDate : j.initDate.copy(),
								currentMonth : false,
								weekMode : 0,
								weekDays : null
							};
							b.start = (j.theDate.copy([ 0 ], [ 0, 0, 1 ])
									.getDay()
									- j.__("calStartDay") + 7) % 7;
							b.thisMonth = j.theDate.getMonth();
							b.thisYear = j.theDate.getFullYear();
							b.wk = j.theDate.copy([ 0 ], [ 0, 0, 1 ]).adj(
									2,
									(-1 * b.start)
											+ (j.__("calStartDay") === 0 ? 1
													: 0)).getWeek(4);
							b.end = 32 - j.theDate
									.copy([ 0 ], [ 0, 0, 32, 13 ]).getDate();
							b.lastend = 32 - j.theDate.copy([ 0, -1 ],
									[ 0, 0, 32, 13 ]).getDate();
							b.presetDate = j._makeDate(j.d.input.val());
							b.thisDateArr = b.thisDate.getArray();
							b.theDateArr = j.theDate.getArray();
							b.checkDates = (a.inArray(false, [ c.afterToday,
									c.beforeToday, c.notToday, c.maxDays,
									c.minDays, c.blackDates, c.blackDays ]) > -1);
							j.calNext = true;
							j.calPrev = true;
							if (b.thisDateArr[0] === b.theDateArr[0]
									&& b.thisDateArr[1] === b.theDateArr[1]) {
								b.currentMonth = true
							}
							if (b.presetDate.comp() === j.theDate.comp()) {
								b.presetDay = b.presetDate.getDate()
							}
							if (c.afterToday === true
									&& (b.currentMonth === true || (b.thisDateArr[1] >= b.theDateArr[1] && b.theDateArr[0] === b.thisDateArr[0]))) {
								j.calPrev = false
							}
							if (c.beforeToday === true
									&& (b.currentMonth === true || (b.thisDateArr[1] <= b.theDateArr[1] && b.theDateArr[0] === b.thisDateArr[0]))) {
								j.calNext = false
							}
							if (c.minDays !== false) {
								b.minDate.adj(2, -1 * c.minDays);
								if (b.theDateArr[0] === b.minDate.getFullYear()
										&& b.theDateArr[1] <= b.minDate
												.getMonth()) {
									j.calPrev = false
								}
							}
							if (c.maxDays !== false) {
								b.maxDate.adj(2, c.maxDays);
								if (b.theDateArr[0] === b.maxDate.getFullYear()
										&& b.theDateArr[1] >= b.maxDate
												.getMonth()) {
									j.calNext = false
								}
							}
							if (c.calUsePickers === true) {
								b.picker = a(
										"<div>",
										{
											"class" : "ui-grid-a ui-datebox-grid",
											style : "padding-top: 5px; padding-bottom: 5px;"
										});
								b.picker1 = a(
										'<div class="ui-block-a"><select name="pickmon"></select></div>')
										.appendTo(b.picker).find("select");
								b.picker2 = a(
										'<div class="ui-block-b"><select name="pickyar"></select></div>')
										.appendTo(b.picker).find("select");
								for (e = 0; e <= 11; e++) {
									b.picker1
											.append(a('<option value="'
													+ e
													+ '"'
													+ ((b.thisMonth === e) ? ' selected="selected"'
															: "") + ">"
													+ j.__("monthsOfYear")[e]
													+ "</option>"))
								}
								for (e = (b.thisYear - 80); e <= b.thisYear + 10; e++) {
									b.picker2
											.append(a('<option value="'
													+ e
													+ '"'
													+ ((b.thisYear === e) ? ' selected="selected"'
															: "") + ">" + e
													+ "</option>"))
								}
								b.picker1.on("change", function() {
									j.theDate.setMonth(a(this).val());
									j.refresh()
								});
								b.picker2.on("change", function() {
									j.theDate.setFullYear(a(this).val());
									j.refresh()
								});
								b.picker.find("select").selectmenu({
									mini : true,
									nativeMenu : true
								});
								b.picker.appendTo(j.d.intHTML)
							}
							l = a('<div class="' + f + 'grid">').appendTo(
									j.d.intHTML);
							if (c.calShowDays) {
								j._cal_days = j.__("daysOfWeekShort").concat(
										j.__("daysOfWeekShort"));
								b.weekDays = a("<div>", {
									"class" : f + "gridrow"
								}).appendTo(l);
								if (j.__("isRTL") === true) {
									b.weekDays.css("direction", "rtl")
								}
								if (c.calShowWeek) {
									a("<div>").addClass(
											f + "griddate " + f
													+ "griddate-empty " + f
													+ "griddate-label")
											.appendTo(b.weekDays)
								}
								for (e = 0; e <= 6; e++) {
									a(
											"<div>"
													+ j._cal_days[(e + b.startDay) % 7]
													+ "</div>").addClass(
											f + "griddate " + f
													+ "griddate-empty " + f
													+ "griddate-label")
											.appendTo(b.weekDays)
								}
							}
							b.gen = j._cal_gen(b.start, b.lastend, b.end,
									!c.calOnlyMonth, j.theDate.getMonth());
							for ( var n = 0, m = b.gen.length; n < m; n++) {
								k = a("<div>", {
									"class" : f + "gridrow"
								});
								if (j.__("isRTL")) {
									k.css("direction", "rtl")
								}
								if (c.calShowWeek) {
									a(
											"<div>",
											{
												"class" : f + "griddate " + f
														+ "griddate-empty"
											}).text("W" + b.wk).appendTo(k);
									b.wk++;
									if (b.wk > 52
											&& typeof b.gen[parseInt(n, 10) + 1] !== "undefined") {
										b.wk = new Date(
												b.theDateArr[0],
												b.theDateArr[1],
												((j.__("calStartDay") === 0) ? b.gen[parseInt(
														n, 10) + 1][1][0]
														: b.gen[parseInt(n, 10) + 1][0][0]))
												.getWeek(4)
									}
								}
								for ( var d = 0, g = b.gen[n].length; d < g; d++) {
									if (c.calWeekMode) {
										b.weekMode = b.gen[n][c.calWeekModeDay][0]
									}
									if (typeof b.gen[n][d] === "boolean") {
										a(
												"<div>",
												{
													"class" : f + "griddate "
															+ f
															+ "griddate-empty"
												}).appendTo(k)
									} else {
										h = j._cal_check(b, b.theDateArr[0],
												b.gen[n][d][1], b.gen[n][d][0]);
										if (b.gen[n][d][0]) {
											a(
													"<div>"
															+ String(b.gen[n][d][0])
															+ "</div>")
													.addClass(
															b.thisMonth === b.gen[n][d][1] ? (f
																	+ "griddate ui-corner-all ui-btn-up-"
																	+ h.theme + (h.ok ? ""
																	: " "
																			+ f
																			+ "griddate-disable"))
																	: (f
																			+ "griddate "
																			+ f + "griddate-empty"))
													.jqmData(
															"date",
															((c.calWeekMode) ? b.weekMode
																	: b.gen[n][d][0]))
													.jqmData(
															"theme",
															b.thisMonth === b.gen[n][d][1] ? h.theme
																	: "-")
													.jqmData("enabled", h.ok)
													.jqmData("month",
															b.gen[n][d][1])
													.appendTo(k)
										}
									}
								}
								if (c.calControlGroup === true) {
									k.find(".ui-corner-all").removeClass(
											"ui-corner-all").eq(0).addClass(
											"ui-corner-left").end().last()
											.addClass("ui-corner-right")
											.addClass("ui-controlgroup-last")
								}
								k.appendTo(l)
							}
							if (c.calShowWeek) {
								l.find("." + f + "griddate").addClass(
										f + "griddate-week")
							}
							if (c.useTodayButton || c.useClearButton) {
								k = a("<div>", {
									"class" : f + "controls"
								});
								if (c.useTodayButton) {
									a(
											'<a href="#">'
													+ j
															.__("calTodayButtonLabel")
													+ "</a>")
											.appendTo(k)
											.buttonMarkup({
												theme : c.theme,
												icon : "check",
												iconpos : "left",
												corners : true,
												shadow : true
											})
											.on(
													c.clickEvent,
													function(i) {
														i.preventDefault();
														j.theDate = new j._date();
														j.theDate = new j._date(
																j.theDate
																		.getFullYear(),
																j.theDate
																		.getMonth(),
																j.theDate
																		.getDate(),
																0, 0, 0, 0);
														j.d.input
																.trigger(
																		"datebox",
																		{
																			method : "doset"
																		})
													})
								}
								if (c.useClearButton) {
									a(
											'<a href="#">'
													+ j.__("clearButton")
													+ "</a>").appendTo(k)
											.buttonMarkup({
												theme : c.theme,
												icon : "delete",
												iconpos : "left",
												corners : true,
												shadow : true
											}).on(c.clickEventAlt, function(i) {
												i.preventDefault();
												j.d.input.val("");
												j.d.input.trigger("datebox", {
													method : "clear"
												});
												j.d.input.trigger("datebox", {
													method : "close"
												})
											})
								}
								if (c.useCollapsedBut) {
									k.addClass("ui-datebox-collapse")
								}
								k.appendTo(l)
							}
							j.d.intHTML
									.on(
											c.clickEventAlt
													+ " vmouseover vmouseout",
											"div." + f + "griddate",
											function(i) {
												if (i.type === c.clickEventAlt) {
													i.preventDefault();
													if (a(this).jqmData(
															"enabled")) {
														j.theDate
																.set(2, 1)
																.set(
																		1,
																		a(this)
																				.jqmData(
																						"month"))
																.set(
																		2,
																		a(this)
																				.jqmData(
																						"date"));
														j.d.input
																.trigger(
																		"datebox",
																		{
																			method : "set",
																			value : j
																					._formatter(
																							j
																									.__fmt(),
																							j.theDate),
																			date : j.theDate
																		});
														j.d.input
																.trigger(
																		"datebox",
																		{
																			method : "close"
																		})
													}
												} else {
													if (a(this).jqmData(
															"enabled")
															&& typeof a(this)
																	.jqmData(
																			"theme") !== "undefined") {
														if (c.calWeekMode !== false
																&& c.calWeekHigh === true) {
															a(this)
																	.parent()
																	.find("div")
																	.each(
																			function() {
																				j
																						._hoover(this)
																			})
														} else {
															j._hoover(this)
														}
													}
												}
											});
							j.d.intHTML.on("swipeleft", function() {
								if (j.calNext) {
									j._offset("m", 1)
								}
							}).on("swiperight", function() {
								if (j.calPrev) {
									j._offset("m", -1)
								}
							});
							if (j.wheelExists) {
								j.d.intHTML.on("mousewheel", function(i, o) {
									i.preventDefault();
									if (o > 0 && j.calNext) {
										j.theDate.set(2, 1);
										j._offset("m", 1)
									}
									if (o < 0 && j.calPrev) {
										j.theDate.set(2, 1);
										j._offset("m", -1)
									}
								})
							}
						}
					})
})(jQuery);
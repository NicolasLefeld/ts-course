"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var sumary = Summary_1.Summary.WinsAnalysisWithHtmlReport('Man United');
matchReader.load();
sumary.buildAndPrintReport(matchReader.matches);

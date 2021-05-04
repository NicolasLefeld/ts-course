import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
const sumary = Summary.WinsAnalysisWithHtmlReport('Man United')

matchReader.load()
sumary.buildAndPrintReport(matchReader.matches)
import { MatchData } from './MatchData'
import { WinsAnalisis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutPutTarget {
    print(report: string): void
}

export class Summary {
    static WinsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalisis(team), new HtmlReport())
    }

    constructor(public analyzer: Analyzer, public outPutTarget: OutPutTarget){}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)

        this.outPutTarget.print(output)
    }
}
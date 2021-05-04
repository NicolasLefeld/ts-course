import fs from 'fs'
import { OutPutTarget } from '../Summary'

export class HtmlReport implements OutPutTarget {
    print(report: string): void{
        const html = `
        <div>
            <h1>Analysis Report</h1>
            <div>${report}</dvi>
        </div>`

        fs.writeFileSync('report.html', html)
    }
}
import { Event } from '../models/Event'
import { Parent } from '../models/Parent'

const newLine = '%0d%0a'

export default class EmailGenerator {
  private writeLine(value: string): string {
    if (value === undefined || value === '') return ''
    return value + newLine
  }

  private writeParent(parent: Parent): string {
    let value = ' - ' + parent.name
    if (parent.phone) value += ' - ' + parent.phone

    if (parent.email) value += ' - ' + parent.email

    value += newLine
    return value
  }

  private buildBody(event: Event): string {
    let body = this.writeLine(`LJFC Attendance Report`)
    body += newLine

    body += this.writeLine(`Date: ${event.date}`)
    body += this.writeLine(`Location: ${event.location}`)
    body += this.writeLine(`Team: ${event.team.name}`)
    body += this.writeLine(`Type of event: ${event.type}`)
    body += this.writeLine(`Lead Coach: ${event.leadCoachName}`)
    body += this.writeLine(`Lead Coach Contact Number: ${event.leadCoachNumber}`)
    body += this.writeLine(`COVID Rep: ${event.covidrep}`)
    body += newLine
    body += this.writeLine(`Attendees:`)
    body += newLine

    const players = event.team.players.filter((p) => p.selected === true)
    players.forEach((p) => {
      body += this.writeLine(p.name)
      body += newLine
      if (p.parent1.selected === true) {
        body += this.writeParent(p.parent1)
      }
      if (p.parent2.selected === true) {
        body += this.writeParent(p.parent2)
      }
      body += this.writeLine(` - Self Assessed: ${p.selfAssessment ? 'Yes' : 'No'}`)
      body += newLine
      body += newLine
    })

    return body
  }

  public generateEmail(event: Event): void {
    const to = 'cwo@littletonjuniorfc.com, chairman@littletonjuniorfc.com'
    const subject = `LJFC ${event.date} - ${event.team.name} attendance`
    const body = this.buildBody(event)
    const mail = `mailto:${to}?subject=${subject}&body=${body}`
    const link = document.createElement('a')
    link.setAttribute('href', mail)
    link.click()
  }
}

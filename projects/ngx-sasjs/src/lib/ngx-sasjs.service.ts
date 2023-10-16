import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class NgxSasjsService {
  constructor() {}

  downloadTextFile(filename: string, text: string) {
    const element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    )
    element.setAttribute('download', filename + '.txt')

    element.style.display = 'none'
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }
}

import './style.css'
import { createTextNode, createElement }  from './utils'
import Person from './libs/person'

const appendChildToBody = ()  => {
  document.body.appendChild(createTextNode('123'))
}

let person = new Person('jack', 18)
console.log(person)

appendChildToBody()
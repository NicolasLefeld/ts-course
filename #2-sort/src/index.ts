import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollections'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([11, 1, 12, 35, 33, -50])
const charactersCollection = new CharactersCollection('zxCyANmc')
const linkedList = new LinkedList()

numbersCollection.sort()
charactersCollection.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data);

linkedList.add(500)
linkedList.add(10)
linkedList.add(100)
linkedList.add(99)
linkedList.sort()
linkedList.print()
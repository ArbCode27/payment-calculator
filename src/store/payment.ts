import { reactive } from 'vue'

export const store = reactive({
  params: {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0
  },
  people: <Array<any>>[]
})

export function getGrandTotal() {
  return store.params.total * (store.params.tip / 100 + 1)
}

export function calculate() {
  store.people = []
  const people = store.params.people

  const totalPerPerson = getGrandTotal() / people
  store.params.remaining = getGrandTotal()

  for (let index = 0; index < people; index++) {
    console.log(index)
    store.people.push({
      id: crypto.randomUUID(),
      person: index + 1,
      totalPerPerson: Math.round(totalPerPerson),
      paid: false
    })
  }

  calculateRemaining()
}

export function calculateRemaining() {
  const missingToPay = store.people.filter((item) => !item.paid)
  const remaining = missingToPay.reduce((acc, item) => (acc += item.totalPerPerson), 0)
  console.log(remaining)

  store.params.remaining = remaining
}

export function pay(id: string) {
  const person = store.people.find((item) => item.id === id)
  if (person) {
    person.paid = !person.paid
    calculateRemaining()
  }
}

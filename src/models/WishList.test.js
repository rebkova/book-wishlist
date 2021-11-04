import { type } from "mobx-state-tree";
import { WishList, WishListItem } from "./WishList";

it('can create an instance of a model', () => {
  const item = WishListItem.create({
    title: "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
    authors: "Bill Bryson",
    price: 3.88,
  })

  expect(item.price).toBe(3.88)
  item.changeTitle('Baloo')
  expect(item.title).toBe('Baloo')
})

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        title: "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
        authors: "Bill Bryson",
        price: 3.88,
      },
    ]
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(3.88)
})

it('can add new items', () => {
  const list = WishList.create()
  list.add(WishListItem.create({
    title: "Pika Nogavička",
    authors: "Astrid Lindgren",
    price: 4.25,
  }))

  expect(list.items.length).toBe(1)
  expect(list.items[0].title).toBe('Pika Nogavička')
  list.items[0].changeTitle('Pippi!')
  expect(list.items[0].title).toBe('Pippi!')
})
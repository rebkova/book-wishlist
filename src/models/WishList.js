import { types } from 'mobx-state-tree'

// this piece of data is called a snapshot
const data = {
  "title": "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
  "authors": "Bill Bryson",
  "price": 3.88,
}

export const WishListItem = types.model({
  title: types.string,
  authors: types.string,
  price: types.number,
})
  .actions(self => ({
    // using function with 'self' parameter to avoid issues with 'this' keyword
    changeTitle(newTitle) {
      self.title = newTitle
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeAuthors(newAuthor) {
      self.authors = newAuthor
    },
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))
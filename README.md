# Shopping Cart - [Live Preview](https://robisonwebdev.github.io/shopping-cart/)

## Version 2 Objectives
- Update to current React Router
- Fix spacing in mobile view.
- Reorganize components structure.
- Refactor components with current knowledge.
- Refactor code structure.
- Fixed background pattern from not showning.
- Add error/404 page.

## Version 1 Objective
My objective for creating a Shopping Cart with react was to learn how to use Router. Router allowed me move from creating single page applications, to multiple page applications. With Router I was able to setup a navigation using HashRouter, Switch, Route, and Link.

## Version 1 - 05/23/2021
- Created a 4 page application with the following pages:
    - Home
    - Shop
    - Product Detail
    - Cart
- Navigation bar that links to:
    - Home
    - Shop
    - Cart
- Navigation bar persist on every page.
- Shopping page pulls from an array and maps out each item, plugging information into function to create an identical card display for each item.
- Product Detail page:
    - Displays item information.
    - Add to cart button.
    - Proceed to cart button that links to Cart page.
    - Go Back button that links to Shop page.
- Cart page:
    - Keeps track of each item added, plus item quantity.
    - Calculate subtotal of each item.
    - Calculate total of all items added.
    - Checkout button (Only displays an alert, doesn't checkout).
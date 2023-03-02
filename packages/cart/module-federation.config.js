module.exports = {
  name: 'cart',
  exposes: {
    './CartIconComponent':
      './src/presentation/components/elements/cart-icon/cart-icon.component.tsx',
    './CartDropdownComponent':
      './src/presentation/components/elements/cart-dropdown/cart-dropdown.component.tsx',
    './CheckoutPageContentComponent':
      './src/presentation/components/fragments/checkout-page-content/checkout-page-content.component.tsx',
  },
};

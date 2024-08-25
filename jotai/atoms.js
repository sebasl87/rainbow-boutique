import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
const initialState = undefined;

export const totalProducts = atomWithStorage('totalProducts', initialState);
totalProducts.debugLabel = 'totalProducts';

export const productsFiltered = atom();
productsFiltered.debugLabel = 'productsFiltered';

export const productsInCart = atomWithStorage('productsInCart', []);
productsInCart.debugLabel = 'productsInCart';

export const cartAtom = atomWithStorage('cartAtom', initialState);
cartAtom.debugLabel = 'cartAtom';

export const showModalCart = atom(false);
showModalCart.debugLabel = 'showModalCart';

export const orderSummaryAtom = atomWithStorage(
  'orderSummaryAtom',
  initialState,
);
orderSummaryAtom.debugLabel = 'orderSummaryAtom';

export const itemsListInCart = atomWithStorage('itemsListInCart', initialState);
itemsListInCart.debugLabel = 'itemsListInCart';

export const step1Atom = atomWithStorage('step1Atom', {
  email: '',
  phone: '',
  pickUpMethod: '',
  pickingUpPersonName: '',
  pickingUpPersonLastName: '',
  pickingUpPersonDni: '',
  pickingUpPersonPhone: '',
});
step1Atom.debugLabel = 'step1Atom';

export const step2Atom = atomWithStorage('step2Atom', {
  paymentMethod: '',
  facturationName: '',
  facturationLastName: '',
  facturationDni: '',
  facturationPhone: '',
  facturationStreet: '',
  facturationPostalCode: '',
  facturationPiso: '',
  facturationDpto: '',
  facturationCity: '',
  facturationProv: '',
});
step2Atom.debugLabel = 'step2Atom';

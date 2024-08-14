import { atomWithStorage } from "jotai/utils";
const initialState = undefined;

export const productsList = atomWithStorage("productsList", initialState);
productsList.debugLabel = "productsList";

export const productsInCart = atomWithStorage("productsInCart", []);
productsInCart.debugLabel = "productsInCart";

export const cartAtom = atomWithStorage("cartAtom", initialState);
cartAtom.debugLabel = "cartAtom";

export const orderSummaryAtom = atomWithStorage(
  "orderSummaryAtom",
  initialState
);
orderSummaryAtom.debugLabel = "orderSummaryAtom";

export const itemsListInCart = atomWithStorage("itemsListInCart", initialState);
itemsListInCart.debugLabel = "itemsListInCart";

export const step1Atom = atomWithStorage("step1Atom", {
  email: "",
  phone: "",
  pickUpMethod: "",
  pickingUpPersonName: "",
  pickingUpPersonLastName: "",
  pickingUpPersonDni: "",
  pickingUpPersonPhone: "",
});
step1Atom.debugLabel = "step1Atom";

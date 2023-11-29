import { useState, createContext, ReactNode } from 'react';
import { CartT } from 'types/types';

const ProductContext = createContext<{
  cart: CartT[];
  handleAddToCart: (cartItem: CartT) => void;
  removeCart: (removeId: number) => void;
  getAllAmount: () => number;
}>({
  cart: [],
  handleAddToCart: () => {},
  removeCart: () => {},
  getAllAmount: () => 0,
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [cart, setCart] = useState<CartT[]>([]);

  const handleAddToCart = (cartItem: CartT) => {
    const isItemInCart = cart?.some(item => item.id === cartItem.id);

    if (isItemInCart) {
      setCart(prevState =>
        prevState?.map(prev =>
          prev.id === cartItem.id
            ? { ...prev, amount: prev.amount + cartItem.amount }
            : prev
        )
      );
    } else {
      setCart(prevState => [...prevState, cartItem]);
    }
  };

  const removeCart = (removeId: number) => {
    setCart(prev => {
      return prev.filter(item => item.id !== removeId);
    });
  };

  const getAllAmount = () => {
    return cart.reduce((acc, cur) => {
      return (acc = acc + cur.amount);
    }, 0);
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        handleAddToCart,
        removeCart,
        getAllAmount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

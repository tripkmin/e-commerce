import Header from './layouts/Header';
import Navbar from 'components/Navbar';
import Main from 'layouts/Main';
import Product from 'layouts/Product';
import data from 'assets/data';
import { ProductProvider } from 'context/ProductContext';

export default function App() {
  return (
    <ProductProvider>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Product product={data} />
      </Main>
    </ProductProvider>
  );
}

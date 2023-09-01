import {Navbar} from './components/NavBar';
import { AppRoutes } from "./Router"
import Layout from './Layout';
import { ShoppingCartProvider } from './context/CartContext';

export default function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Layout>
    <Navbar />
      <AppRoutes/>
    </Layout>
    </ShoppingCartProvider>
    </>
  )
}



import CartWidget from './componentes/CartWidget'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'; 

const App = () => {
  return (
    <>
    <NavBar />
   <CartWidget/>
   <ItemListContainer contenido="Bienvenido a un mundo de sabores!" texto/>
   <ItemListContainer contenido="Bienvenido a un mundo de sabores!" texto/>
   <ItemListContainer contenido="Bienvenido a un mundo de sabores!"/>
    </>
  )
}

export default App;
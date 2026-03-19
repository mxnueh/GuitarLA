import { useState } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {
    const [guitars, setGuitars] = useState(db)  
    const [cart, setCart] = useState([])

    // Buena practica para cargar datos desde una API o base de datos, 
    // pero como el arreglo ya esta importado, no es necesario usarlo

    // useEffectt (() => {
    // //     setGuitars(db)
    // // }, [])

    // LO DEL MAP
    // En este map se renderiza un componente Guitar por cada elemento del
    // arreglo guitars, pero como no se esta usando el elemento del arreglo,
    // se puede omitir y solo usar el map para renderizar el componente Guitar
    // la cantidad de veces que sea necesario, en este caso 5 veces,
    // ya que el arreglo tiene 5 elementos.

    // LOS PROPS
    // Los props son una forma de pasar datos desde un componente padre a un componente hijo,
    // en este caso, se pueden pasar los datos de cada guitarra como props al componente Guitar,
    // para que el componente Guitar pueda renderizar la información de cada guitarra.

    function addToCart(item) {
        const itemExists = cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (itemExists >= 0) { //Existe en el carrito
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++; // Incrementa la cantidad
            setCart(updatedCart);
        } else {
            item.quantity = 1; // Agrega la propiedad quantity al item
            setCart([...cart, item])
        }
    }

    return (
    <>
    <Header />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        
        <div className="row mt-5">
            {guitars.map((guitar) => (
                <Guitar 
                key={guitar.id}
                guitar={guitar}
                // cart={cart}
                addToCart={addToCart}
                setCart={setCart}
                />
            ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer> 
    </>
  )
}

export default App

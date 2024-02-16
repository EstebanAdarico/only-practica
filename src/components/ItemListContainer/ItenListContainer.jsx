//directamente importando el json
import { useEffect,useState } from "react";
import data from "../../data/productos.json"





export const ItemListContainer = () => {
   //creando un estado para guardar los productos con un array vacio
   const [productos,setProduct] = useState([]);

   const pedirProductos = () => {
      return new Promise((resolve,reject)=>{
         resolve(data)
         console.log(`aqui esta lo del console${data}`)
      })
   }

   //llamando a la funcion con el metodo then
   useEffect(()=>{
      pedirProductos()
         .then((res)=>{
            setProduct(res)
         })
   },[])

   const nombre = ["esteban","matias","maria","pablo"]
   const nombre2 = nombre.map((nombre)=>{nombre + "apellido"})   
   console.log(nombre2)
   
   return (
      <div>
         <h1>
            AQUI VAMOS A MOSTRAR LO QUE SALGA DE LAS PROMESAS (PRACTICANDO)
         </h1>
         {
            productos.length > 0 && 
         <div>
            {/*ojo con lo que tiene como imagen */}
            <img src = {productos[0].image} alt = {productos[0].title}/>
            <h2>{productos[0].title}</h2>
            <p>${productos[0].price}</p>
            <p>{productos[0].description}</p>
         </div>
         
         }

      </div>
   );
};

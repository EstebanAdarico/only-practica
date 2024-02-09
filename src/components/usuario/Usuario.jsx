import {PropTypes}  from "prop-types"
import './Usuario.css'

export const Usuario = (props) => {
   const {nombre, secondName, description} = props
   return(
      <div className="user">
         <h1>{nombre}</h1>
         <h3>{secondName}</h3>
         <p>{description}</p>
      </div>
   )
}
Usuario.propTypes = {
   nombre : PropTypes.string.isRequired,
   secondName : PropTypes.string.isRequired,
   description : PropTypes.string.isRequired
}
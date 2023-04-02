import { PropTypes } from "prop-types";

export const SecondApp = ( tittle, subTittle, name ) => {



  //console.log( props );

  return (
    <>
        <h1>{ tittle }</h1>
        {/*<code>{JSON.stringify(newMessage)}</code>*/}
        <p>{ subTittle }</p>
        <p> { name }</p>
    </>
  )
}

SecondApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subTittle: PropTypes.string,
}

SecondApp.defaultProps = {
  name: 'David Briceño',
  subTittle: 'No hay SubTitulo',
  tittle: 'No hay titulo',
}
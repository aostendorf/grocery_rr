import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Grocery = ({ id, name, complete, updateGrocery, deleteGrocery}) =>  (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`grocery-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateGrocery(id)}
      />
      <label htmlFor={`grocery-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteGrocery(id)}>
      X
    </div>
  </div>
)

export default Grocery;
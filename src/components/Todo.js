import React from "react";

const Todo =({ todo,todoDelete, todoToogledComplete,setTodoEdit} ) =>{

 console.log(todo);
        
     return(
    <div className="card mt-3">
        <div className = "card-body">
             <h3 className = "card-title text-right mr-2">   
                    {
                      todo.title
                    }
                                    <button 
                                            onClick={() =>todoToogledComplete(todo.id) }
                                           className={
                                           `btn btn-sm ${todo.completed ? "btn-outline-success": "btn-success"} ml-2'` }


                                    >
                                    {todo.completed ? 'Terminado': 'Terminar'}
                                  </button>
                            </h3> 
                                          
            
                        <p className = "card-text text-right">
                             {
                                todo.description
                           
                             }
                          </p>
                             <hr/>
                             <div className='d-flex justify-content-end'>
       
                               <button 
                               onClick={()=> setTodoEdit(todo)}
                               className="btn btn-sm btn-outline-primary mr-2">
                                    Editar
                                  </button>
                                     
                                 <button 
                                        onClick={() => todoDelete(todo.id)}
                                        className="btn btn-sm btn-outline-danger">
                                    Eliminar
                                    </button>
                   </div>
            </div>
    </div>
 )   
}
export default Todo;
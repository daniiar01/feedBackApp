import React from "react";
import FeedBackItem from "./Components/FeedBackItem/FeedBackItem";
import Header from "./Components/Header/Header"


const App = () => {
    return (
    <>
     <Header  />
    <FeedBackItem />
        </>
       
    )
}

export default App


// const App = () => {
//     return (
// <React.Fragment>
//     <h1>Hello</h1>
//     </React.Fragment>
//     )
    
// }
// export default App
// const App = () => {
//     const loading = false
//     const title = 'Hello world'
// const users = [
//     {id: 1,name: 'Roma'},
//     {id: 2,name: 'Ivan'},
//     {id: 3,name: 'Oleg'},
// ]
// const isAuth = false
// const s = (<button>Войти</button>) 
// const z =  (<button>Выйти</button>)
// if (loading) return <h1>Loading...</h1>
//     return (
// <React.Fragment>
//     <h1>{title}</h1>
//     <h3>Count({users.length})</h3>
//     <ul>
//         {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//         ))}
//     </ul>
//     {
//     isAuth ? s : z
//     }
   
//     </React.Fragment>
//     )
    
// }
// export default App

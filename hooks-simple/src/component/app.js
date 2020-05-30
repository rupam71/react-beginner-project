// import React from 'react';

// class App extends React.Component {
//     state = { resource: 'posts' }
//     render() { 
//         return ( 
//             <div>
//                 <div>
//                     <button
//                     onClick={()=>this.setState({resource:'posts'})}
//                     >
//                         Posts
//                     </button>
//                     <button
//                     onClick={()=>this.setState({resource:'todos'})}
//                     >
//                         Todos
//                     </button>
//                 </div>
//                 {this.state.resource}
//             </div>
//          );
//     }
// }
 
// export default App;

import React , {useState} from 'react';
import ResourceList from './resourceList';
import UserResources from './userResources';

const App = () => {
    const [resource, setResource] = useState('posts');
    // const [varName, setVarname] = useState(initial_value);
    // setVarname is setState

        return ( 
            <div>
                <UserResources />
                <div>
                    <button
                    onClick={()=>setResource('posts')}
                    >
                        Posts
                    </button>
                    <button
                    onClick={()=>setResource('todos')}
                    >
                        Todos
                    </button>
                </div>
                <ResourceList resource={resource} />
            </div>
         );
}
 
export default App;
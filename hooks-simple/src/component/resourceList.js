// import React from 'react' ;
// import axios from 'axios' ;

// class ResourceList extends React.Component {
//     state = { resource: [] };

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//         this.setState({ resource : response.data })
//     }
//     //cdm only work one time, first time
//     //for next rendering, we will use cdu
//     //prevProps is previous props
//     async componentDidUpdate(prevProps) {
//         if(prevProps.resource !== this.props.resource){
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//             this.setState({ resource : response.data })
//         }
//     }

//     render() { 
//         return ( 
//             <div>
//                 {this.state.resource.length}
//             </div>
//          );
//     }
// }
 
// export default ResourceList;











// import React, {useState,useEffect} from 'react' ;
// import axios from 'axios' ;

// const ResourceList =   ({resource}) => {
//     const [resources, setResources] = useState([]);

//     const fetchResource = async resource => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
//         setResources(response.data);
//     }

//     useEffect(() => {
//         fetchResource(resource);
//     },[resource]);
//     // resource will chane our render,
//     // if same resource than no change
//     // if resource change, request will change
//     // empty array only render one time

     
//         return ( 
//             <ul>
//                 {resources.map(record=><li key={record.id}>{record.title}</li>)}
//             </ul>
//          );
    
// }
 
// export default ResourceList;














import React from 'react' ;
import useResource from './useResource';

const ResourceList =   ({resource}) => {
    const resources = useResource(resource);

        return ( 
            <ul>
                {resources.map(record=><li key={record.id}>{record.title}</li>)}
            </ul>
         );
    
}
 
export default ResourceList;
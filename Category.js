// change this Component to a class!
// function Category({data}){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     const categoryData = data.map((el, index) => (
//         <li className="cat-link left valign-wrapper" key={index.toString()}>
//             <i className="material-icons">{el.icon}</i>{el.title}
//         </li>
//     ))
//     return(
//         <div className="row">
//             <ul className="cat-nav center-align">
//                 {categoryData}
//             </ul>
//         </div>
//     )
// }

class Category extends React.Component {
    constructor() {
      super()
    }
  
    render(){
        const categoryData = data.map((el, index) => (
            <li className="cat-link left valign-wrapper" key={index.toString()}>
                <i className="material-icons">{el.icon}</i>{el.title}
            </li>
        ))

        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {categoryData}
                </ul>
            </div>
        )
    }
  }


import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import'./style.css';
//import Leaderboard from './Leaderboard.js';
import Pagination from './Pagination';

class  SCLPage  extends React.Component {
  constructor(props){
    super(props)
    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    this.state = { data: [],
    exampleItems: exampleItems,
    pageOfItems: []
  }
  console.log('exampleItems??',exampleItems);
  this.onChangePage = this.onChangePage.bind(this);
}
  
  

onChangePage(pageOfItems) {
  // update state with new page of items
  this.setState({ pageOfItems: pageOfItems });
  console.log('page??',pageOfItems);
}

    loadData() {
     //fetch('https://jsonplaceholder.typicode.com/comments')
     fetch('https://sec.sasken.com/sec-0.0.1-SNAPSHOT/service/scldashboard')
           .then(response => response.json())
           .then(data => {
             this.setState({data: data })
             console.log(this.state.data)
         })
         
           .catch(err => console.error(this.props.url, err.toString()))
       }
  componentDidMount(){
      this.loadData()
    }
  render() {
  return (
    <div className="sclPage">
      <Card>
      <div class="desc2">
      <font className="fontStyle">Gurukul: Sasken Learning Platform</font><br /><br />
      </div>
        <CardBody>
          <CardTitle>Sasken Coder's League is available on <a href="https://gurukul.sasken.com/">Gurukul </a> for Sasians to continuously 
          improve their programing and coding skills. it currently supports C, C++, Java and Python.
           new problems are added every week. Sasians can submit their solutions and
            get on-line feedback in terms of score.</CardTitle><br />
          <CardText>Happy Coding!!!</CardText>
      </CardBody>
      </Card>
      <h3>Sasken Coders League LeaderBoard</h3>
      <div className='cell'>
 <table className="sclTable">
 <tr>
        <th>Name</th>
        <th>Score</th>
        
 
</tr>
{this.state.pageOfItems.map(item =>
    // <div key={item.id1}>{item.name}</div>
    <tr>
    <td>{item.empName}</td>
    <td>{item.score}</td></tr>
  )} 
  </table>
<Pagination items={this.state.data} onChangePage={this.onChangePage} />
 

</div>
<h3>SCL Core team: Vardhan Walavalkar, Prasad Krishnamurthy</h3>

    </div>
  )
  }

}
export default SCLPage;
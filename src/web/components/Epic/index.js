import React from 'react';
import {
  Card, CardText, CardBody
} from 'reactstrap';
import'./style.css';
// import Pagination from './Pagination';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

class Epic extends React.Component {
  constructor(props) {
    super(props)
    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    this.state = { data: [],
      exampleItems: exampleItems,
      pageOfItems: [],
      data1: []
    }
 
    axios.get("https://sec.sasken.com/sec-0.0.1-SNAPSHOT/service/epicprojectlist").then(res => {
      // Update react-table
      this.setState({
        posts: res.data,
        data: res.data.slice(0, 5),
        pages: res.data.length / 5,
        loading: false
      });
    });
	}
	
	// loadData() {
  //   fetch('https://sec.sasken.com/sec-0.0.1-SNAPSHOT/service/epicprojectlist')
  //   // fetch('http://10.1.101.52:9090/sec-0.0.1-SNAPSHOT/service/epicprojectlist')
	// 		.then(response => response.json())
	// 		.then(data => {
  //       this.setState({data: data });
  //       // console.log('data?',this.state.data);
  //   })
    
	// 		.catch(err => console.error(this.props.url, err.toString()))
	// }
	// componentDidMount() {
	// 	this.loadData()
	// }
  render() {
    const columns = [
      
      {
        Header: "Project Name",
        accessor: "name",
        sortable: true
      },
      {
        Header: "Description",
        accessor: "description",
        sortable: true,
      }
    ];
  return (
    <div className="epicPage">
      <Card>
      <div class="desc2">
      <font className="fontStyle">Engineering Platform for Internal Collaboration (EPIC)</font><br />
      </div>
        <CardBody>
          <CardText>EPIC is available for Sasians to: <br />
      1) Ideate and implement interesting solutions in open or crowd sourcing model.<br />
      2) Contribute to development of solutions for these projects.<br />
      3) Refine and reuse - code and best practices.<br />
      <br /><br />
EPIC projects covers the technologies Sasken works on – Android, Auto IVI, Auto Navigation, Telematics, IOT, AWS, Azure. These projects are being implemented using programming languages like C, C++, Java, Python.</CardText>
          <br /> 
          EPIC recommends and improves SDLC practices by providing appropriate tools, <br />
      1) Logging requirements, defects, ideas, tasks using Issues <br />
      2) Code repository using Git <br />
      3) Code Reviews system using built in UI frames <br />
      4) Project Tracking using Agile style Boards & Milestone<br />
      5) Documentation using Wiki <br />
      6) CI Pipeline <br />
      <br />
      <h3>Current Open Projects In EPIC</h3>
          
        </CardBody>
      </Card>
      {/* <div className="tableStyle">
      
    <table>
    <tr>
				<th className="thStyle">Project Name</th>
				<th>Description</th>

</tr>
   
    {this.state.pageOfItems.map(item =>
                            // <div key={item.id1}>{item.name}</div>
                            <tr>
                            <td>
          <a className ="nameStyle" href={item.http_url_to_repo} target="_blank" rel="noopener noreferrer">{item.name}</a></td>
					<td>{item.description}</td></tr>
                        )}
                        </table>
                        <Pagination items={this.state.data} onChangePage={this.onChangePage} />
</div> */}

<ReactTable
        columns={columns}
        data={this.state.data}
        pages={this.state.pages}
        loading={this.state.loading}
        onPageChange={pageIndex => {
          let pagesize = 5;
          let low = pageIndex * pagesize;
          let high = pageIndex * pagesize + pagesize;
          axios.get("https://sec.sasken.com/sec-0.0.1-SNAPSHOT/service/epicprojectlist").then(res => {
            // Update react-table
            this.setState({
              posts: res.data,
              data: res.data.slice(low, high),
              pages: res.data.pages,
              loading: false
            });
          });
        }}
        defaultPageSize={5}
        noDataText={"Loading..."}
        manual // informs React Table that you'll be handling sorting and pagination server-side
      />

<h3 className="coreTeamStyle">Core team: Ponmuthusubramaniam N, Senthilraja Subramaniyan, Prasad Krishnamurthy</h3>
    

    </div>
  )}
}

export default Epic;
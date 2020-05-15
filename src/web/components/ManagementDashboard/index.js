import React from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import { Tabs, TabList } from 'react-tabs';
import './style.css';

let data = [
    {
        name: 'Profile',
        text: 'Profile'
    },
    {
        name: 'Training Progress Status',
        text: 'Training Progress Status'
    },
    {
        name: 'Assessments',
        text: 'Assessments'
    },
    {
        name: 'Mandatory Trainings',
        text: 'Mandatory Trainings'
    },
    {
        name: 'Training TCB',
        text: 'Training TCB'
    },
    {
        name: 'SME Assessment',
        text: 'SME Assessment'
    },
    {
        name: 'Certificate',
        text: 'Certificate'
    },
];

class index extends React.Component {
	constructor() {
        super();

        this.state = {
            activeTab: 0,
            data: data
        }

        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
			<div className="tabsStyle">
            <div className="tabs-body">
                <Tabs>
                    <TabList className='tabList'>
                <TabHeader data={this.state.data}
                              click={this.changeTabOnClick}
                              activeId={this.state.activeTab} />
                <TabContent data={this.state.data}
                               activeId={this.state.activeTab} />
                               </TabList>
                               </Tabs>
            </div>
			</div>
        )
    }
}

export default index;
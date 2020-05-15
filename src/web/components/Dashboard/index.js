import React from 'react';
import './style.css';
// import { render } from 'react-dom';
import { Tabs, TabList } from 'react-tabs';
import { IdlingTab, IdlingTabPanel } from './idling-tabs';


class Dashboard extends React.Component {

     render() {
        return (
<Tabs className='tabs'>
    <TabList className='tab-list'>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Profile</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Training Progress Status</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Assessments</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Mandatory Trainings</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Training TCB</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>SME Assessment</IdlingTab>
      <IdlingTab className='tab foo' selectedClassName='color-yellow bg-blue border-blue' disabledClassName='color-grey' idleClassName='color-white'>Certificate</IdlingTab>
    </TabList>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Profile</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Training Progress Status</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Assessments</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Mandatory Trainings</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Training TCB</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>SME Assessment</IdlingTabPanel>
    <IdlingTabPanel className='tab-panel bar' selectedClassName='display-block bg-blue' idleClassName='bg-grey'>Certificate</IdlingTabPanel>
  </Tabs>
    
        );
    }
}

export default Dashboard;
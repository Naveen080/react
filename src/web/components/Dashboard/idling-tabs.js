import React, { Component } from 'react';
import { Tab, TabPanel } from 'react-tabs';
import cx from 'classnames';

export class IdlingTab extends Component {
  render() {
    const { className, idleClassName, ...props } = this.props;
    const cn = cx(className, { [idleClassName]: !props.disabled && !props.selected })
    return <Tab {...props} className={cn} />
  }
}
IdlingTab.tabsRole = 'Tab';

export class IdlingTabPanel extends Component {
  render() {
    const { className, idleClassName, ...props } = this.props;
    const cn = cx(className, { [idleClassName]: !props.selected })
    return <TabPanel {...props} className={cn} />
  }
}
IdlingTabPanel.tabsRole = 'TabPanel';
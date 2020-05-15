import React from 'react';

class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')}>
                        <a href="#/" onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></a>
                    </li>
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

}

export default TabHeader;
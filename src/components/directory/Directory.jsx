import React, { Component } from 'react';
import MenuItem from '../menuItem/MenuItem';
import sections from '../../config/sectionsData.json';
import './directoryStyles.scss';
class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections,
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;

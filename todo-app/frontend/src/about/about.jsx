import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Sobre' small="Nós"></PageHeader>

                <h2>Hello Word</h2>
                <p>Hello Word</p>
            </div>
        )
    }
}
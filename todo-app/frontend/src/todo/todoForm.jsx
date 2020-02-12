import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default class props extends Component {

    keyHandler(e) {
        //console.log('passou por aqui keyhandler')
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.handleChange}
                        onKeyUp={(e) => this.keyHandler(e)}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='primary' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}
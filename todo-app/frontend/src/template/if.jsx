import React from 'react'
import props from '../todo/todoForm'

export default props => {
    if(props.test){
        return props.children
    }else {
        return false
    }
}
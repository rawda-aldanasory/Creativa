import React, { Component } from 'react'
import { UseConsumer } from '../../../../../../../Context/Context';

export default class ComponentFive extends Component {
  render() {
    return (
      <>
       <div className='container'>
        <UseConsumer>
          {
             (value) => {
              return ( 
                <div>
                    <h3>Component Five</h3>
                    <p> {value}</p>
                    </div>
            )
            }

          }
        </UseConsumer>
        </div> 
      </>
    )
  }
}
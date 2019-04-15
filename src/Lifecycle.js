import React, { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = { counter = 0 };
        this.increment = this.increment.bind(this);
        this.logOnResize = function() { console.log('resize window...'); };
      }
      render() {
        return (
          <h1> Hello World </h1>
        );
      }
      componentDidMount() {
        window.addEventListener('resize', this.logOnResize);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.logOnResize);
      }
      shouldComponentUpdate(prevProps, prevState) {
        if (prevProps.dontUpdate) {
          return false;
        }
        return true;
      }
      componentDidUpdate(prevProps) {
        /** update DOM or call server here **/
      }
}

export default Lifecycle;
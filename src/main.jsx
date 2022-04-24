import Item from 'antd/lib/list/Item';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './main.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: [
        {
          id: 1,
          text: '扣1送地狱火',
          status: true
        },
        {
          id: 2,
          text: '11111111111大哥真的送吗',
          status: false
        }
      ],
    }
  }
  // myref = React.createRef()
  render() {
    return (
      <div className='box'>

        <span className='head'>ToDoList</span>

        <div className='Header'>

          <input className='text'
            // ref={this.myref}
            value={this.state.text} onChange={(e) => {
              this.setState({
                text: e.target.value
              })
            }}
          />
          <button className='add' onClick={this.handleClick}>add</button></div>
        <div className='list'>
          <ul>
            {
              this.state.list.map((item, index) =>
                <li key={item.id}
                  className={item.status ? 'item2' : 'item1'}>
                  
                  <label className='container'>
                    <input type="checkbox"
                      checked={item.status} onChange={() => {
                        this.handleChecked(index)
                      }}
                      className='hidden-xs-up'
                    />
                    <div class="checkmark"></div>
                  </label>
                  {item.text}
                  <button className='Del'
                    onClick={() => {
                      this.handleDelete(index)
                    }}>delete</button>
                </li>
              )
            }
          </ul>
          {this.state.list.length === 0 ? <div className='empty'>做点什么吧ヾ(≧▽≦*)o</div> : null}
        </div>
      </div>
    );
  }
  handleClick = () => {
    // console.log(this.myref.current.value);
    let newlist = [...this.state.list]
    newlist.push({
      id: Date.now(),
      text: this.state.text,
      status: false
    })
    this.setState({
      list: newlist,
      text: ''
    })
  }
  handleDelete(index) {
    // console.log(index)
    let newlist = this.state.list.concat()
    newlist.splice(index, 1)
    this.setState({
      list: newlist
    })
  }
  handleChecked(index) {
    // console.log(index)
    let newlist = [...this.state.list]
    newlist[index].status = !newlist[index].status
    this.setState({
      list: newlist,
    })
  }
}
ReactDOM.render(<ToDoList />, document.getElementById('root'));
export default ToDoList
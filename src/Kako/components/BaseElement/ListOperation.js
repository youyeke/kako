import React, { Component } from 'react';
import { Icon, Dropdown, Menu, Popconfirm } from 'antd';
import { Consumer } from '../EventProxy/List/ListEventSet';
import './index.css';

export default props => (
  <Consumer>
    { context => <ListOperation {...props} context={ context } />}
  </Consumer>
);

class ListOperation extends Component{
  state = {
    visible: false,
  }
  actionMap = (type, actionOts) => {
    const { text, record, index, operation, context } = this.props;
    type = type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());

    if( context[`on${type}`] ){
      if( type === 'Delete' ){
        this.setState({
          visible: true,
        });
      }else{
        context[`on${type}`](record,actionOts);
      }
    }else{
      console.warn(`未注册的事件： on${type}`)
    }
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
  handleConfirm = () => {
    const { record, context } = this.props;
    context[`onDelete`](record);
    this.handleCancel();
  }

  render(){
    const { record, operation } = this.props;
    const { visible } = this.state;

    const popconfirmProps = {
      title: '确定要删除该项吗？',
      visible,
      onCancel: this.handleCancel,
      onConfirm: this.handleConfirm,
    };

    return <Popconfirm { ...popconfirmProps }>
      <Dropdown overlay={ renderMemu(record,operation,this.actionMap) } trigger={['click']} placement="bottomRight">
        <Icon style={{fontSize: '24px'}} type="ellipsis" />
      </Dropdown>
    </Popconfirm>
  }
}
// const ListOperation = ({ text, record, index, operation, context }) => {
//   function actionMap(type, actionOts) {
//     type = type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
//     if( context[`on${type}`] ){
//       context[`on${type}`](record,actionOts);
//     }else{
//       console.warn(`未注册的事件： on${type}`)
//     }
//   }
//   return 
// }

function renderMemu(record,operation,actionMap){
  let menuItemList = operation.map( (v,i,a) => {
    v.options = v.options || {};
    return operationMap['defaults'].bind(null,v,i,a,record,actionMap)();
  } ).filter( item => item );

  if(menuItemList.length === 0){
    menuItemList.push(<Menu.Item key="99" disabled>暂无</Menu.Item>);
  }
  const menu = <Menu>
    { menuItemList }
  </Menu>;
  return menu;
}

const operationMap = {
  'defaults': (v,i,a,record,actionMap) => {
    if( !testValue(record,v.options) ){
      return null;
    }
    const iconMap = {
      'edit': 'form',
      'query': 'file-text',
      'delete': 'delete',
      'default': 'right',
    };
    const iconColorMap = {
      'edit': '#1890ff',
      'query': '#666',
      'delete': '#f5222d',
      'default': '#666',
    };
    return (
      <Menu.Item key={i} className="Kako-table-action-menuItem" onClick={ actionMap.bind(null, v.action, v.options ) } >
        <span>
          <Icon type={ iconMap[v.action] || iconMap['default'] } style={{ color: `${iconColorMap[v.action] || iconColorMap['default']}` }} />{ v.title }
        </span>
      </Menu.Item>
    );
  }
}

// 检测该行数据的字段的值 是否符合预期
function testValue(record,options){
  const rulesMap = {
    'IS_NOT_NULL': /\S+/g
  };
  let { expectedField, expectedValue } = options;
  const fieldList = expectedField instanceof Array ? expectedField : [ expectedField ];
  const valueList = expectedValue instanceof Array ? expectedValue : [ expectedValue ];
  return fieldList.every( ( field, i ) => {
    let value = valueList[i];
    // 若不是简单的相等关系的话
    if( record[field] !== value ){
      // 先看看 expectedValue 是不是预设关键字
      if( rulesMap[value] ){
        if( !rulesMap[value].test( record[field] ) ){
          return false;
        }
      }else{
        // 再看看 expectedValue 是不是传入了正则表达式
        try {
          value = new RegExp(value,'g');
        } catch (error) {
          return false;
        }
        if( value instanceof RegExp ){
          if( !value.test(record[field]) ){
            return false;
          }
        }else{
          return false;
        }
      }
    }
    return true;
  } );
}
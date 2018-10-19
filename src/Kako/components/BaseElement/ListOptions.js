import React from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import { Consumer } from '../EvenProxy/ListEvenSet';

export default props => (
  <Consumer>
    { context => <ListOptions {...props} context={ context } />}
  </Consumer>
);

const ListOptions = ({ text, record, index, options, context }) => {
  function actionMap(type, actionOts) {
    type = type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    if( context[`on${type}`] ){
      context[`on${type}`](record,actionOts);
    }else{
      console.warn(`未注册的事件： on${type}`)
    }
  }
  return <Dropdown overlay={ renderMemu(record,options,actionMap) } trigger={['click']} placement="bottomRight">
    <Icon style={{fontSize: '24px'}} type="ellipsis" />
  </Dropdown>;
}

function renderMemu(record,options,actionMap){
  let menuItemList = options.map( (v,i,a) => {
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
      <Menu.Item key={i} className="Kako-table-action-menuItem" >
        <span onClick={ actionMap.bind(null, v.action, v.options ) }>
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
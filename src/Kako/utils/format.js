import React from 'react';
import { ListOperation } from '../components/BaseElement';

/**
 *
 * 统一 Table columns 的格式
 * @export
 * @param {array} fields 标准化的 fields
 * @param {array} operation 对该行的操作
 * @returns antd Table columns
 */
export function formatTableFields(fields = [],operation = []){
  const rst = fields.map( fieldCfg => {
    const { field, label, ...rest } = fieldCfg;
    return {
      dataIndex: field,
      title: label,
      ...rest,
    };
  } );
  if(operation.length > 0){
    rst.push({
      dataIndex: 'operation',
      title: '',
      width: 30,
      render: (text, record, index) => {
        return <ListOperation
          text={ text }
          record={ record }
          index={ index }
          operation={ operation }
        />;
      },
    });
  }
  return rst;
}
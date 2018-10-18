import React from 'react';
import { ListOptions } from '../components/BaseElement';

/**
 *
 * 统一 Table columns 的格式
 * @export
 * @param {array} fields 标准化的 fields
 * @param {array} options 对该行的操作
 * @returns antd Table columns
 */
export function formatTableFields(fields = [],options = []){
  const rst = fields.map( fieldCfg => {
    const { field, label, ...rest } = fieldCfg;
    return {
      dataIndex: field,
      title: label,
      ...rest,
    };
  } );
  if(options.length > 0){
    rst.push({
      dataIndex: 'options',
      title: '',
      width: 30,
      render: (text, record, index) => {
        return <ListOptions
        text={ text }
        record={ record }
        index={ index }
        options={ options }
        />;
      },
    });
  }
  return rst;
}
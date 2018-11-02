import Kako from './Kako';
import * as AnimationSet from './Kako/components/Animation';
import {
  setBaseComponentExtends,
  setLayoutExtends,

  getMainLayout,
  getItem,
  getFormItem,
} from './Kako/utils/readConfig';
import { setFormItemTypeExtends } from './Kako/utils/getFormItemType';

export default Kako;

export {
  setBaseComponentExtends,
  setLayoutExtends,
  setFormItemTypeExtends,

  getMainLayout,
  getItem,
  getFormItem,
};
export const Animation = AnimationSet;
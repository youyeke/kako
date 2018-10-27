import Kako from './Kako';
import * as AnimationSet from './Kako/components/Animation';
import { setBaseComponentExtends, setLayoutExtends } from './Kako/utils/readConfig';

export default Kako;

export {
  setBaseComponentExtends,
  setLayoutExtends,
};
export const Animation = AnimationSet;
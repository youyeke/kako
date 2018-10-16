import queryString from 'query-string';
import { getItem } from './readConfig';


let index = 0;
let prevRouterType = '';
let prevPage = [];
const history = [];
const keepLiveCache = {
  // 'default': {
  //   '0': <ReactComonent />
  // }
};

/**
 *
 *
 * @export
 * @param {Object} location
 * @param {Object} config
 * @returns
 */
export function router(location,config){
  const queryObj = queryString.parse(location.search);
  
  return renderRoute(
    switchRoute( queryObj.routerType, config ),
    queryObj.routerType
  );
}

function switchRoute(routerType = 'default',config){
  return config[routerType];
}

function renderRoute(items = [], routerType = 'default'){
  if(routerType !== prevRouterType){
    prevPage = items.map( (itemConfig,index) => {
        if(itemConfig.keepLive === true){
          ;
        }
        return getItem(itemConfig,index);
    } );
    prevRouterType = prevPage;
  }
  return prevPage
}
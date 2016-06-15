import * as types from './actionTypes';

export function selectprofile(id, name){
	return  {
		type: types.SELECTPROFILE,
		id,
		name
	};
}
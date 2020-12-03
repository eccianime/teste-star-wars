//import { SHOW_TOAST, HIDE_TOAST } from '../actions/mainTypes';

const main = {
	isLoaderVisible: false
}

const mainReducer = (state = main, action) => {
	switch (action.type) {
		default: return {...state }
	}
};

export default mainReducer;
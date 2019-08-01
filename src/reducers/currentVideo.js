import Redux from 'redux';


var currentVideoReducer = (state = null, action) => {
  if(action.type === "CHANGE_VIDEO") {
      return action.video
    }
  return state;
};

export default currentVideoReducer;

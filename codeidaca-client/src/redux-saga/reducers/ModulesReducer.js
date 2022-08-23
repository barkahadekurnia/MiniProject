import * as ActionType from "../constants/ModulesConstant";

const INIT_STATE = {
  Modules: [],
};

const ModulesReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_MODULES_REQUEST:
      return { ...state };
    case ActionType.GET_MODULES_SUCCESS:
      return GetModulesucceed(state, action);
    case ActionType.DEL_MODULES_REQUEST:
      return { ...state };
    case ActionType.DEL_MODULES_SUCCESS:
      return DelModulesucceed(state, action);
    case ActionType.ADD_MODULES_REQUEST:
      return { ...state };
    case ActionType.ADD_MODULES_SUCCESS:
      return AddModulesucceed(state, action);
    case ActionType.EDIT_MODULES_REQUEST:
      return { ...state };
    case ActionType.EDIT_MODULES_SUCCESS:
      return EditModulesSucceed(state, action);
    default:
      return GetModulesucceed(state, action);
  }
};

const GetModulesucceed = (state, action) => {
  return {
    ...state,
    Modules: action.payload,
  };
};
const DelModulesucceed = (state, action) => {
  const { payload } = action;
  const filterRegion = state.Modules.filter((el) => el.region_id !== payload);
  return {
    ...state,
    Modules: [...filterRegion],
  };
};
const AddModulesucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    Modules: [...state.Modules, payload],
  };
};

const EditModulesSucceed = (state, action) => {
  const { payload } = action;
  const filterModules = state.Modules.filter(
    (el) => el.Modules_id !== payload[0].Modules_id
  );
  return {
    ...state,
    Modules: [...filterModules, payload[0]],
  };
};

export default ModulesReduce;

import Immutable from 'seamless-immutable';

export const Types = {
  CREATE_REQUEST: 'category/CREATE_REQUEST',
  CREATE_SUCCESS: 'category/CREATE_SUCCESS',
  CREATE_FAILURE: 'category/CREATE_FAILURE',

  GET_ALL_REQUEST: 'category/GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'category/GET_ALL_SUCCESS',
  GET_ALL_FAILURE: 'category/GET_ALL_FAILURE',

  EDIT_REQUEST: 'category/EDIT_REQUEST',
  EDIT_REQUEST_SUCCESS: 'category/EDIT_REQUEST_SUCCESS',
  EDIT_REQUEST_FAILURE: 'category/EDIT_REQUEST_FAILURE',

  REMOVE_REQUEST: 'category/REMOVE_REQUEST',
  REMOVE_REQUEST_SUCCESS: 'category/REMOVE_REQUEST_SUCCESS',
  REMOVE_REQUEST_FAILURE: 'category/REMOVE_REQUEST_FAILURE',
};

const INITIAL_STATE = Immutable({
  message: null,
  error: null,
  data: [],
});

export const Creators = {
  createCategory: args => ({
    type: Types.CREATE_REQUEST,
    args,
  }),

  createCategorySuccess: category => ({
    type: Types.CREATE_SUCCESS,
    payload: { message: 'Category Created Successfully', category },
  }),

  createCategoryFailure: () => ({
    type: Types.CREATE_FAILURE,
    payload: { error: 'There was a problem when trying to Create Category' },
  }),

  getAllCategories: () => ({
    type: Types.GET_ALL_REQUEST,
  }),

  getAllCategoriesSuccess: category => ({
    type: Types.GET_ALL_SUCCESS,
    payload: { category },
  }),

  getAllCategoriesFailure: () => ({
    type: Types.GET_ALL_FAILURE,
    payload: { error: 'There was a problem when trying to get Category from Database' },
  }),

  editCategory: category => ({
    type: Types.EDIT_REQUEST,
    payload: { category },
  }),

  editCategorySuccess: categoryEdited => ({
    type: Types.EDIT_REQUEST_SUCCESS,
    payload: { message: 'Category Edited Successfully', categoryEdited },
  }),

  editCategoryFailure: () => ({
    type: Types.EDIT_REQUEST_FAILURE,
    payload: { error: 'There was a problem when trying to Edit User' },
  }),

  removeCategory: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),

  removeCategorySuccess: id => ({
    type: Types.REMOVE_REQUEST_SUCCESS,
    payload: { message: 'Category Removed Successfully', id },
  }),

  removeCategoryFailure: () => ({
    type: Types.REMOVE_REQUEST_FAILURE,
    payload: { error: 'There was a problem when trying to Remove Category' },
  }),
};

const category = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Types.CREATE_REQUEST:
      return {
        ...state,
        message: null,
        error: null,
      };

    case Types.CREATE_SUCCESS:
      return {
        ...state,
        message: payload.message,
        data: [payload.user, ...state.data],
      };

    case Types.CREATE_FAILURE:
      return {
        ...state,
        error: payload.error,
      };

    case Types.GET_ALL_REQUEST:
      return {
        ...state,
        message: null,
        error: null,
      };

    case Types.GET_ALL_SUCCESS:
      return {
        data: [...payload.categories],
        error: null,
      };

    case Types.GET_ALL_FAILURE:
      return {
        ...state,
        error: payload.error,
      };

    case Types.EDIT_REQUEST:
      return {
        ...state,
        message: null,
        error: null,
      };

    case Types.EDIT_REQUEST_SUCCESS:
      return {
        ...state,
        message: payload.message,
        data: state.data.map(item => (item.id === payload.categoryEdited.id ? payload.categoryEdited : item)),
      };

    case Types.EDIT_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
      };

    case Types.REMOVE_REQUEST:
      return {
        ...state,
        message: null,
        error: null,
      };

    case Types.REMOVE_REQUEST_SUCCESS:
      return {
        ...state,
        message: payload.message,
        data: state.data.filter(item => item.id !== payload.id),
      };

    case Types.REMOVE_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default category;

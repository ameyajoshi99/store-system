import { call, put } from 'redux-saga/effects';

import { Creators as CategoryCreators } from '../ducks/categories';

import {
  CREATE_CATEGORIES,
  READ_CATEGORIES,
  UPDATE_CATEGORIES,
  DELETE_CATEGORIES,
} from './event-handlers-types/categories';

import execRequest from './execRequest';
import { CATEGORIES } from './entitiesTypes';

const EVENT_TAGS = {
  GET_ALL_CATEGORIES: 'CATEGORIES_GET_ALL',
  CREATE_CATEGORY: 'CATEGORY_CREATE',
  REMOVE_CATEGORY: 'CATEGORY_REMOVE',
  EDIT_CATEGORY: 'CATEGORY_EDIT',
};

export function* createCategory(action) {
  try {
    const { args } = action;

    const result = yield call(execRequest, CATEGORIES, CREATE_CATEGORIES, EVENT_TAGS.CREATE_CATEGORY, args);

    const newCategory = {
      ...args,
      id: result,
    };

    yield put(CategoryCreators.createCategorySuccess(newCategory));
  } catch (err) {
    yield put(CategoryCreators.createCategoryFailure(err.message));
  }
}

export function* getAllCategories() {
  try {
    const result = yield call(execRequest, CATEGORIES, READ_CATEGORIES, EVENT_TAGS.GET_ALL_CATEGORIES);
    yield put(CategoryCreators.getAllCategoriesSuccess(result));
  } catch (err) {
    yield put(CategoryCreators.getAllCategoriesFailure(err));
  }
}

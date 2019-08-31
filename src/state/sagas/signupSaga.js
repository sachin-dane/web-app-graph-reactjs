/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    SIGNUP_REQUESTED,
} from '../../constants/actions'

import {
    signupSuccessfull,
    signupFailure
} from '../actions/signupActions';
import signupApi from '../../api/signupApi';

export function* signupApiRequest(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(signupApi.signupApiRequest, action.payload);
    console.log('signupsaga response==>> ', response)
    if (response) {

        yield put(signupSuccessfull());
    } else {
        console.log('signupsaga response==>> elseeee')
        yield put(signupFailure());
    }
}

export default function* signupSaga() {
    yield takeEvery(SIGNUP_REQUESTED, signupApiRequest);
}

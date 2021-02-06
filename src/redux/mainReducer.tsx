import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';


export type CurrentStateType = {
    maxValue: number
    minValue: number
    currentValue: number
};

export const initialState: CurrentStateType = {
    maxValue: 10,
    minValue: 0,
    currentValue: 0
}

export const mainReducer = (state: CurrentStateType = initialState, action: CurrencyReducersTypes): CurrentStateType => {
    switch (action.type) {
        case  ACTIONS_TYPE.COUNTER_ADD:
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case ACTIONS_TYPE.COUNTER_RESET:
            return {
                ...state,
                currentValue: state.minValue
            }
        case ACTIONS_TYPE.SETTING_VALUES:
            return {
                ...state,
                maxValue: action.maxValue,
                minValue: action.minValue,
                currentValue: action.currentValue
            }
        default:
            return state;
    }
};

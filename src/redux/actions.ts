export enum ACTIONS_TYPE {
    //enum ведет себя как обьект ACTION.TYPE получаем доступ ко всем константам
    COUNTER_ADD = 'COUNTER_ADD',
    COUNTER_RESET = 'COUNTER_RESET',
    SETTING_VALUES = 'SETTING_VALUES',
}

export type CounterAddType = {
    type: ACTIONS_TYPE.COUNTER_ADD
};

export const CounterAddAC = (): CounterAddType => {
    return {
        type: ACTIONS_TYPE.COUNTER_ADD
    };
};

export type CounterResetType = {
    type: ACTIONS_TYPE.COUNTER_RESET,
};

export const CounterResetAC = (): CounterResetType => {
    return {
        type: ACTIONS_TYPE. COUNTER_RESET,
    };
};

export type SettingValuesType = {
    type: ACTIONS_TYPE.SETTING_VALUES,
    maxValue: number,
    minValue:number,
    currentValue:number
};

export const SettingValuesAC = ( maxValue: number, minValue:number, currentValue:number): SettingValuesType => {
    return {
        type: ACTIONS_TYPE.SETTING_VALUES,
        maxValue: maxValue,
        minValue: minValue,
        currentValue:currentValue

    };
};

export type CurrencyReducersTypes =  CounterAddType | CounterResetType | SettingValuesType;

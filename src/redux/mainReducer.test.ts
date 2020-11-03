import {CurrentState, mainReducer} from './mainReducer';
import {CounterAddAC, CounterResetAC, SettingValuesAC} from './actions';
import Settings from '../SettingWindows/SettingsWindow';

test('check increase number', () => {
    const startState: CurrentState = {
        minValue: 0,
        maxValue: 5,
        currentValue: 0
    }

    const endState = mainReducer(startState, CounterAddAC())

    expect(endState.currentValue).toBe(1)
})
test('check reset', () => {
    const startState: CurrentState = {
        minValue: 0,
        maxValue: 5,
        currentValue: 2
    }

    const endState = mainReducer(startState, CounterResetAC())

    expect(endState.currentValue).toBe(0)
})
test('check settings', () => {
    const startState: CurrentState = {
        minValue: 0,
        maxValue: 5,
        currentValue: 0
    }

    const endState = mainReducer(startState, SettingValuesAC(  7, 2, 2))

    expect(endState.minValue).toBe(2)
    expect(endState.maxValue).toBe(7)
    expect(endState.currentValue).toBe(2)
})


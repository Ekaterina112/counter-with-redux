import React, {useState} from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Settings from './SettingWindows/SettingsWindow';
import {useDispatch, useSelector} from 'react-redux';
import {CounterAddAC, CounterResetAC, SettingValuesAC} from './redux/actions';
import {CurrentStateType} from './redux/mainReducer';


function App() {
    let count = useSelector<CurrentStateType, CurrentStateType>((state) => state)
    let dispatch = useDispatch()
    let [error, setError] = useState<string>('work')

    function add() {
        dispatch(CounterAddAC())
    }

    function reset() {
        dispatch(CounterResetAC())
    }

    function settingValues(maxValue: number, minValue: number, currentValue: number) {
        dispatch(SettingValuesAC(maxValue, minValue, currentValue))
    }

    return (<div className={'wrapper'}>
            <Settings
                count={count}
                settingValues={settingValues}
                error={error}
                setError={setError}
            />
            <Counter
                count={count}
                add={add}
                reset={reset}
                error={error}
            />
        </div>
    );
}

export default App;

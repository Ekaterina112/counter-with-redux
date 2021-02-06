import React, {ChangeEvent, useState} from 'react';
import s from './SettingWindow.module.css'
import Btn from '../Button/BTN';
import {Paper, TextField} from '@material-ui/core';
import {CurrentStateType} from '../redux/mainReducer';


export type SettingsType = {
    count: CurrentStateType
    settingValues: (maxValue: number, minValue: number, currentValue: number) => void
    error: string
    setError: (error: string) => void
}

function Settings(props: SettingsType) {
    let [minValue, setMinValue] = useState<number>(props.count.minValue)
    let [maxValue, setMaxValue] = useState<number>(props.count.maxValue)

    function checkValue(maxValue: number, minValue: number, oldMaxValue: number, oldMinValue: number) {
        if (maxValue <= minValue || maxValue > 10 || minValue < 0) {
            props.setError('incorrect value')
        } else if (isNaN(minValue) || isNaN(maxValue)) {
            props.setError('enter value')
        } else if (oldMaxValue !== maxValue || oldMinValue !== minValue) {
            props.setError('press \'set\'')
        } else {
            props.setError('work')
        }
    }

    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(newValue, minValue, maxValue, minValue)
        setMaxValue(newValue)
    }
    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(maxValue, newValue, maxValue, minValue)
        setMinValue(newValue)
    }

    let setCallback = () => {
        props.settingValues(maxValue, minValue, minValue)
        checkValue(maxValue, minValue, maxValue, minValue)
    }

    return (
        <div className={s.counter}>
            <Paper style={{
                backgroundColor: '#dceef8'
            }}
                   elevation={24}
                   square={false}
            >
                <div className={s.screen}>
                    <div>
                        <TextField
                            style={{
                                fontFamily: 'inherit',
                                color: '#ae5c6a',
                                borderColor: '#ae5c6a'
                            }}
                            id="outlined-password-input"
                            label="Max value"
                            type="number"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={onChangeForMaxValue}
                            defaultValue={props.count.maxValue}
                            error={maxValue <= minValue || maxValue > 10 || isNaN(maxValue)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Start value"
                            type="number"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={onChangeForMinValue}
                            defaultValue={props.count.minValue}
                            error={maxValue <= minValue || minValue < 0 || isNaN(minValue)}
                        />
                    </div>
                </div>
                <div className={s.buttons}>
                    <Btn
                        title={'set'}
                        click={setCallback}
                        disabled={props.error !== 'work' && props.error !== 'press \'set\''}/>
                </div>
            </Paper>
        </div>
    );
}

export default Settings;
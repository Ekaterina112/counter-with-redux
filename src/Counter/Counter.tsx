import React from 'react';
import {Paper} from '@material-ui/core';
import s from './Counter.module.css'
import Btn from '../Button/BTN';
import {CurrentStateType} from '../redux/mainReducer';


export type CounterType = {
    add: () => void
    reset: () => void
    disabled?: boolean
    count:CurrentStateType
    error:string
}


function Counter(props: CounterType) {

    return (
      <div className={s.counter}>
        <Paper elevation={24}
        square={false}
               style={{
                   backgroundColor: "#dceef8"
               }}
        >
            <div className={`${props.count.currentValue == props.count.maxValue ? s.maximum : s.usual} ${s.screen}`} >
             {props.error === 'work' ? props.count.currentValue : props.error}
            </div>
            <div className={s.buttons}>
                <Btn
                    title="add"
                    click={props.add}
                    disabled={props.error!=="work"  || props.count.currentValue == props.count.maxValue}
                />
                <Btn
                    title="reset"
                    click={props.reset}
                    disabled={props.error!=="work"}
                />
            </div>
        </Paper>
    </div>
    );
}

export default Counter;

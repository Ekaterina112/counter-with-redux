import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


export type BtnType = {
    click: () => void
    disabled: boolean
    title: string
}

const useStyles = makeStyles({
    root: {
        borderColor: '#ae5c6a',
        color: '#ae5c6a',
        fontFamily: 'inherit'
    },
});

function Btn(props: BtnType) {

    const classes = useStyles();
    return (
        <Button classes={{
            root: classes.root,
        }}
                variant="outlined"
                size="small"
                onClick={props.click}
                disabled={props.disabled}>{props.title}</Button>
    );
}

export default Btn;

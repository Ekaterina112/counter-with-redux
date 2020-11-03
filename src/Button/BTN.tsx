import React from 'react';
import {Button} from '@material-ui/core';


export type BtnType = {
    click: () => void
    disabled: boolean
    title: string
}


function Btn(props: BtnType) {

    return (
            <Button
                style={{
                    fontFamily: 'inherit',
                    color: '#ae5c6a',
                    borderColor: "#ae5c6a"
                }}
                variant="outlined"
                size="small"
                onClick={props.click}
                disabled={props.disabled}
            >
                {props.title} </Button>
    );
}

export default Btn;

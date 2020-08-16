import React, {useState} from 'react';
import {ErrorMessage, Field} from 'formik';
import classes from './Input.module.sass';

export default function Input(props: {
    onClear?: () => void;
    id: string;
    type: string;
    label: string;
    name: string;
    imgSrc: string;
    imgCls: string;
}) {
    const [src, setSrc] = useState(props.imgSrc);
    const [type, setType] = useState(props.type);
    const handleVisibility = () => {
        if (src === 'https://img.icons8.com/windows/64/000000/hide.png') {
            setSrc('https://img.icons8.com/windows/64/000000/visible.png');
            setType('text');
        } else if (src === 'https://img.icons8.com/windows/64/000000/visible.png') {
            setSrc('https://img.icons8.com/windows/64/000000/hide.png');
            setType('password');
        } else {
            if (props.onClear) {
                props.onClear();
            }
        }
    };
    return (
        <>
            <label className={classes.label} htmlFor={props.id}>
                {props.label}
            </label>
            <div className={classes.inpDiv}>
                <Field className={classes.input} type={type} id={props.id} name={props.name} />
                <img onClick={handleVisibility} className={props.imgCls} alt={''} src={src} />
            </div>
            <h6 className={classes.error}>
                <ErrorMessage name={props.name} />
            </h6>
        </>
    );
}


import { useState } from 'react';

export default function Random () {
    let arraynum = [];
    for(let i =0; i<100; i++){
        let arraytemp= [Math.floor(Math.random() * 100)];
        arraynum = [...arraynum, ...arraytemp];
    }
    return ;

}
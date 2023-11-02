import React, { useContext, useEffect } from 'react';
import { PropsData } from '../../components/MainBox';
import './index.scss';
// const style = require('./index.module.scss')

export const Anothertest = () => {

    const allData:any = useContext(PropsData);

    const init = () => {

        const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        ctx?.fillRect(0, 0, 400, 100);

    };

    useEffect(()=>{init();
        const test = document.getElementsByClassName("fuck");
        const testgan = test[0]?.innerHTML;
        const id = Number("");
        console.log(test,test.length,testgan, id);
        console.log(test[0]);
        //  testgan.replace('6', 'div')
         test[0].innerHTML = testgan.replace(/span/g, 'd');
         console.log(test[0].innerHTML);
         const num_ = (1 > 4 ? [0,1,2] : [0,1,2,3]) || [1];
         console.log(num_)
       
    }, []);

   // 一个单例模式



    return (
        <>
        <div className='fuck' id='or' onClick={()=>{
            // testhtml();
        }}>6<span>this</span> </div>
        <div className='cas' id='r' style={{border: '1px solid red'}}>origin</div>
        <button onClick={() => {
            allData.changePage(allData.PAGE.WEBGLTEST);
        }}>switch to webgl-one</button>
        <canvas id='canvas' width="400" height="400" style={{border: '1px solid green'}}></canvas>
        <div>
            haha
        </div>
        </>
    )
}
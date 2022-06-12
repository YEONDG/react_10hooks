import React, { useEffect, useState, useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTVfMTE5%2FMDAxNjUyNTQ1ODQxOTMz.ZbkDSWEwyRgYbbEke3kqcG3b53ljpnMc7Lwxtic5-nYg.Ug-4BKttM3_yN5FjLwj24zUwaylQ7545Zd3L4eni6GMg.PNG.cdyeon11%2F2022-05-15.png&type=a340" />
        <button onClick={exitFull}>exit full</button>
      </div>
      <button onClick={triggerFull}>make full</button>
    </div>
  );
};

export default App;

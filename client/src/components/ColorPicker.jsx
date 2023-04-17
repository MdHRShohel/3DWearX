import React from 'react';
import { SketchPicker } from 'react-color';
import {useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      onChangeComplete={(color) => state.color = color.hex}
      presetColors={[
        '#000000',
        '#ffffff',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#00ffff',
        '#ff00ff',
        '#ff8000',
        '#ff0080',
        '#8000ff',
        '#0080ff',
        '#008080',
        '#800080',
        '#808000',
        '#808080',
      ]}
      />
    </div>
  )
}

export default ColorPicker
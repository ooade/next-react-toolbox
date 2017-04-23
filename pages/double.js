import React from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default () => (
  <p>
    Hola!
    <ProgressBar type="circular" mode="indeterminate" />
    <ProgressBar type="linear" mode="determinate" value={83} buffer={90} />
  </p>
)

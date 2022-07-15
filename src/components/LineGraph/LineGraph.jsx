import Plot from "react-plotly.js";
import { useState } from "react";

export default function LineGraph(props) {
  const [state, setState] = useState({
    data: props.data ?? [],
    layout: props.layout ?? {},
    frame: props.frame ?? {},
    config: props.config ?? {},
  });

  return (
    <Plot
      data={state.data}
      layout={state.layout}
      frames={state.frames}
      config={state.config}
      onInitialized={setState}
      onUpdate={setState}
    />
  )
}

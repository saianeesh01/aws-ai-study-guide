import * as React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const DiagramWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  flex-wrap: wrap;
  position: relative;
`

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  gap: 1.2rem;
  position: relative;
`

const Neuron = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ faded }) => (faded ? "#333" : "#00ff90")};
  border-radius: 50%;
  border: 2px solid #00ff90;
  position: relative;
  animation: ${fadeIn} 0.6s ease;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    top: 50%;
    left: 130%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    color: #00ffcc;
    white-space: nowrap;
  }
`

const SvgLines = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const FlowLine = styled.line`
  stroke: #00ff90;
  stroke-width: 2;
  stroke-dasharray: 6;
  stroke-dashoffset: 0;
  animation: dash 1.5s linear infinite;

  @keyframes dash {
    to {
      stroke-dashoffset: -12;
    }
  }
`

export default function NeuralNetworkDiagram() {
  const inputs = ["Pixels", "Edges", "Brightness"]
  const hiddens = ["Feature 1", "Feature 2", "Feature 3"]
  const outputs = ["Cat", "Dog"]

  return (
    <DiagramWrapper>
      {/* Input Layer */}
      <Layer>
        {inputs.map((label, i) => (
          <Neuron key={i} data-label={label} />
        ))}
      </Layer>

      {/* Hidden Layer */}
      <Layer>
        {hiddens.map((label, i) => (
          <Neuron key={i} data-label={label} />
        ))}
      </Layer>

      {/* Output Layer */}
      <Layer>
        {outputs.map((label, i) => (
          <Neuron key={i} data-label={label} />
        ))}
      </Layer>

      {/* Optional lines for signal flow */}
      <SvgLines viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
        <FlowLine x1="100" y1="60" x2="220" y2="60" />
        <FlowLine x1="100" y1="120" x2="220" y2="100" />
        <FlowLine x1="100" y1="180" x2="220" y2="140" />
        <FlowLine x1="220" y1="60" x2="340" y2="90" />
        <FlowLine x1="220" y1="100" x2="340" y2="120" />
        <FlowLine x1="220" y1="140" x2="340" y2="150" />
      </SvgLines>
    </DiagramWrapper>
  )
}

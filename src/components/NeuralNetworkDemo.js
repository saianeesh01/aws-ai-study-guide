import * as React from "react"
import styled, { keyframes } from "styled-components"

// Fade in + slight upward float
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const NetworkWrapper = styled.div`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
`

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  animation: ${fadeIn} 0.6s ease-in;
`

const Neuron = styled.div`
  background: ${({ active }) => (active ? "#00ffcc" : "#00ff90")};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #00ff90;

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 120%;
    top: 50%;
    transform: translateY(-50%);
    background: #111;
    color: #00ff90;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.8rem;
    white-space: nowrap;
    border: 1px solid #00ff90;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  height: 2px;
  width: 40px;
  background: #00ff90;
  transform: rotate(${props => props.rotate || "0deg"});
  transform-origin: left center;

  &::after {
    content: "▶";
    position: absolute;
    right: -10px;
    top: -8px;
    font-size: 1rem;
    color: #00ff90;
  }
`

export default function NeuralNetworkDemo() {
  const [activeIndex, setActiveIndex] = React.useState(null)

  return (
    <>
      <h2>🧠 Visual Demo: Neural Network</h2>
      <NetworkWrapper>
        {/* Input Layer */}
        <Layer>
          <Neuron data-tooltip="Tenure (months)" />
          <Neuron data-tooltip="Monthly Charges" />
          <Neuron data-tooltip="Support Calls" />
        </Layer>

        {/* Hidden Layer */}
        <Layer>
          {[0, 1, 2, 3].map((_, idx) => (
            <Neuron
              key={idx}
              data-tooltip={`Hidden Neuron ${idx + 1}`}
              active={activeIndex === idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          ))}
        </Layer>

        {/* Output Layer */}
        <Layer>
          <Neuron data-tooltip="Prediction: Will Churn?" />
        </Layer>
      </NetworkWrapper>
    </>
  )
}

/* eslint-disable no-console */
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus'
import { Text } from '../../text/text'
import { RadioButtons, RadioButtonsOption } from '../radio-buttons'

export default {
  parameters: {
    order: 1
  },
  title: 'Components/Radio Buttons/Unselected'
}

export const Passive = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const Focused = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons
      {...useInitialFocus()}
      onChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const Disabled = function () {
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange() {
    throw new Error('This function should not be called')
  }
  return (
    <RadioButtons
      disabled
      onChange={handleChange}
      options={options}
      value={null}
    />
  )
}

export const DisabledOption = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, disabled: true, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const BooleanValue = function () {
  const [value, setValue] = useState<null | boolean>(null)
  const options: Array<RadioButtonsOption<boolean>> = [
    { children: <Text>foo</Text>, value: true },
    { children: <Text>bar</Text>, value: false }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue === 'true' ? true : false)
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const NumberValue = function () {
  const [value, setValue] = useState<null | number>(null)
  const options: Array<RadioButtonsOption<number>> = [
    { children: <Text>foo</Text>, value: 1 },
    { children: <Text>bar</Text>, value: 2 },
    { children: <Text>baz</Text>, value: 3 }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(parseInt(newValue, 10))
  }
  return (
    <RadioButtons onChange={handleChange} options={options} value={value} />
  )
}

export const Space = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons
      onChange={handleChange}
      options={options}
      space="large"
      value={value}
    />
  )
}

export const OnValueChange = function () {
  const [value, setValue] = useState<null | string>(null)
  const options: Array<RadioButtonsOption> = [
    { children: <Text>foo</Text>, value: 'foo' },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  function handleChange(newValue: null | string) {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <RadioButtons
      onValueChange={handleChange}
      options={options}
      value={value}
    />
  )
}

export const LargeOptions = function () {
  const [value, setValue] = useState('bar')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 860.39 135" width="200"><defs><style>.cls-1{fill:#f8c307;}</style></defs><path class="cls-1" d="M13.42,119V101.6h13.8V31.4H13.42V14h54a40.27,40.27,0,0,1,16.73,3.23,25.81,25.81,0,0,1,11.1,9.15,24.83,24.83,0,0,1,4,14.17v1.5q0,7.2-2.7,11.78a21.4,21.4,0,0,1-6.37,7.05,28.06,28.06,0,0,1-7,3.52v2.7a27.26,27.26,0,0,1,7.2,3.37,20.93,20.93,0,0,1,6.68,7.13q2.78,4.65,2.77,12.15v1.5a26.73,26.73,0,0,1-4,14.92A26,26,0,0,1,84.6,115.7,39.09,39.09,0,0,1,68,119ZM47,57.2h18.3a15.82,15.82,0,0,0,10.13-3.15,10.48,10.48,0,0,0,4-8.7v-1.5q0-5.7-3.9-8.77T65.32,32H47ZM47,101h18.6q6.45,0,10.43-3.15t4-9v-1.5q0-5.85-3.9-9T65.62,75.2H47Z" transform="translate(-13.42 -14)"/><path class="cls-1" d="M196.87,45.05h17.55v74H197.17l-.9-10.8c-4.2,8.7-15.75,12.9-24,13-21.9.15-38.1-13.35-38.1-39.3,0-25.5,17-38.85,38.55-38.7,9.9,0,19.35,4.65,23.55,12ZM152.47,82c0,14.1,9.75,22.5,21.9,22.5,28.8,0,28.8-44.85,0-44.85C162.22,59.6,152.47,67.85,152.47,82Z" transform="translate(-13.42 -14)"/><path class="cls-1" d="M292.27,121.1a42.29,42.29,0,0,1-19.58-4.5,33.85,33.85,0,0,1-13.87-13q-5.1-8.55-5.1-20.7v-2.1q0-12.15,5.1-20.7a33.85,33.85,0,0,1,13.87-13,42.29,42.29,0,0,1,19.58-4.5q10.65,0,18.3,3.75a32.78,32.78,0,0,1,12.37,10.27,35.83,35.83,0,0,1,6.23,14.78l-18.3,3.9a21.55,21.55,0,0,0-2.7-8.1,15.14,15.14,0,0,0-5.93-5.7,19.57,19.57,0,0,0-9.52-2.1,21.26,21.26,0,0,0-10.28,2.47,17.66,17.66,0,0,0-7.2,7.35,24.92,24.92,0,0,0-2.62,11.93v1.5a24.83,24.83,0,0,0,2.62,11.92,17.63,17.63,0,0,0,7.2,7.36,21.37,21.37,0,0,0,10.28,2.47q8.55,0,13-4.42a20.78,20.78,0,0,0,5.63-11.63l18.3,4.35a41.27,41.27,0,0,1-6.68,14.48,32.87,32.87,0,0,1-12.37,10.27Q302.92,121.1,292.27,121.1Z" transform="translate(-13.42 -14)"/><path class="cls-1" d="M367.72,119V14h18.9V72.05h2.7l24.6-27.45h24.6l-34.35,36L439.72,119h-24.3l-26.1-29.55h-2.7V119Z" transform="translate(-13.42 -14)"/><path d="M477.52,119V14h9V119Z" transform="translate(-13.42 -14)"/><path d="M539.92,33.5a7.68,7.68,0,0,1-7.8-7.8,7.47,7.47,0,0,1,2.25-5.62,7.77,7.77,0,0,1,13.35,5.62,7.68,7.68,0,0,1-2.18,5.55A7.48,7.48,0,0,1,539.92,33.5Zm-4.5,85.5V46.1h9V119Z" transform="translate(-13.42 -14)"/><path d="M589.71,82.85v-1.8q0-11.55,4.73-19.8A33.37,33.37,0,0,1,607.11,48.5a35.3,35.3,0,0,1,17.7-4.5q12,0,18.68,4.73a30.9,30.9,0,0,1,9.82,10.72h1.8V46.1h8.4v91.5q0,5.4-2.85,8.4t-8.7,3h-49.8v-8.1h48q4.65,0,4.65-4.5V105.05H653a29.89,29.89,0,0,1-5.47,7,26.57,26.57,0,0,1-9.08,5.62,37.56,37.56,0,0,1-13.65,2.18A35.7,35.7,0,0,1,607,115.4a32.64,32.64,0,0,1-12.68-12.82Q589.71,94.26,589.71,82.85Zm37.2,29q12.45,0,20.18-7.8t7.72-21.45v-1.2q0-13.8-7.72-21.52T626.91,52.1q-12.3,0-20.1,7.73T599,81.35v1.2q0,13.65,7.8,21.45T626.91,111.8Z" transform="translate(-13.42 -14)"/><path d="M712.41,119V14h9V58.85h1.8a26.58,26.58,0,0,1,5-6.83,24.26,24.26,0,0,1,8.4-5.25,35.86,35.86,0,0,1,13-2,32.07,32.07,0,0,1,14.55,3.3A25.5,25.5,0,0,1,774.74,58q4,6.6,4,16.65V119h-9V75.2q0-12-6-17.18t-16.05-5.17a25.71,25.71,0,0,0-18.75,7.35q-7.5,7.35-7.5,22.35V119Z" transform="translate(-13.42 -14)"/><path d="M851,119c-3.89,0-6.82-1-8.77-3s-2.92-4.8-2.92-8.4V54.2h-23.4V46.1h23.4V18.8h9V46.1h25.5v8.1h-25.5v52.2q0,4.5,4.5,4.5h17.1V119Z" transform="translate(-13.42 -14)"/></svg>`
  const options: Array<RadioButtonsOption> = [
    {
      children: (
        <Text>
          <div dangerouslySetInnerHTML={{ __html: svg }}></div>
        </Text>
      ),
      value: 'foo'
    },
    { children: <Text>bar</Text>, value: 'bar' },
    { children: <Text>baz</Text>, value: 'baz' }
  ]
  return (
    <RadioButtons onValueChange={setValue} options={options} value={value} />
  )
}

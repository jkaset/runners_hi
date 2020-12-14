// import React from 'react'
// //import ButtonGroup from 'react-bootstrap/ButtonGroup'
// export const MoodSelector = () => {

//   let moodValue = []

//   const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   return (

//     <>
//       {moods.map(m => (
//         <button onClick={evt => {
//           evt.preventDefault()
//           console.log("clicked", m)
//           moodValue.push(m)
//         }} key={m}>{m}</button>
//       ))}
//    </>
//   )
// }

// import RangeSlider from 'react-bootstrap-range-slider';
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// // import { Button } from 'react-bootstrap'
// // import ButtonGroup from 'react-bootstrap/ButtonGroup'

// export const MoodSelector = () => {

//   const [ value, setValue ] = useState({
//     max: 10, 
//     min: 1, 
//     value: 1, 
//     label: 'mood'
// }); 

//   return (
//     <RangeSlider
//       value={value}
//       onChange={changeEvent => setValue(changeEvent.target.value)}
//     />
//   );

// };


// // ({onChange}) => {

// //   const [slider, setSlider] = useState({
// //       max: 10, 
// //       min: 1, 
// //       value: 1, 
// //       label: 'mood'
// //   });

// //   const onSlide = () => {
// //       onChange(slider.value);
// //   } 

// //   return (
// //       <div className="range-slider">
// //           <p>{slider.label}</p>
// //           <input type="range" min={slider.min} max={slider.max} value={slider.value} 
// //            onChange={() => onSlide()} className="slider" id="myRange"></input>
// //       </div>
// //   );
// // }
// //export default RangeSlider;
// // export const MoodSelector = () => {
// //   return (
// //   // <ButtonGroup as='select' ref={moodPre}>
// //   //   {moods.map(m => (
// //   //     <button onClick="{}" key={m}>{m}</button>
// //   //   ))}
// //   // </ButtonGroup>
// //   )
// // }
// // export const MoodSelector = () => {
// // const emoji = require("emoji-dictionary")
// // const moodEmojiArray = [
// //   'weary', 'cry', 'frowning', 'confused', 'neutral_face', 'relieved', 'slightly_smiling_face', 'blush', 'grinning', 'joy'
// // ]

// // const emojis = moodEmojiArray.map(selector => (emoji.getUnicode(selector)))
// // console.log(emojis)

// //   return (
// //   <>
// //   {/* <ButtonGroup>
// //     <button>{emojis[4]}</button>
// //   </ButtonGroup> */}
// //   {/* <div>{emojis[5]}</div> */}
// //   {emojis.map(e => (
// //          <button value={e.value}>{e}</button>
// //      ))}
// //   </>
// //   )
// // }


// // // export const MoodSelector = () => {


// // //   // moods.map(m => (
// // //   //   <option key={m}></option>
// // //   // ))
// // //   // const moods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // //   const emoji = require("emoji-dictionary")

// // //   const moodSelectorArray = [
// // //     {value: '1', emoticon: 'weary'}, 
// // //     {value: '2', emoticon: 'cry'},
// // //     {value: '3', emoticon: 'frowning'}, 
// // //     {value: '4', emoticon: 'confused'}, 
// // //     {value: '5', emoticon: 'neutral_face'}, 
// // //     {value: '6', emoticon: 'relieved'}, 
// // //     {value: '7', emoticon: 'slightly_smiling_face'}, 
// // //     {value: '8', emoticon: 'blush'}, 
// // //     {value: '9', emoticon: 'grinning'}, 
// // //     , 
// // //     {value: '10', emoticon: 'joy'}, 
// // //   ]

// // //     // {'frowning'}, {'confused'}, {'neutral_face'}, {'relieved'}, {'slightly_smiling_face'}, {'blush'}, {'grinning'}, {'joy'}]

// // //   const emojis = moodSelectorArray.map(selector => (emoji.getUnicode(selector)))

// // //   return (

// // //     <ButtonGroup aria-label="Basic example">

// // //       {emojis.map(e => (
// // //         <button value={e.value}>{e.emoticon}</button>
// // //       ))}

// // //     </ButtonGroup>

// // //   )

// // // }

// // //<button value='1'>{e}</button>

// // //<ButtonGroup aria-label="Basic example"> 
// // //</ButtonGroup> 
// // // {mood.map(m => (
// // //   <option key={m}>{m}</option>
// // // ))}

// // // {emojis.map(e => (
// // //   <button value={keyValue}>{e}</button>
// // // ))}

// // // const keyValue = moodSelectorArray.map(v => parseInt((v.value)))

// // const handleClick=(e)=>{
// //   return e.target.value
// //  }

// //  <ButtonGroup ref={moodPre}>
// //           {moods.map(m => (
// //               <button onClick="{handleClick}" key={m}>{m}</button>
// //             ))}
// //           </ButtonGroup>
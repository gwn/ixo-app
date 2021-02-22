const React = require('react'),
    {SvgXml} = require('react-native-svg')
const iconStr = `
<svg width="18" height="21" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4022 0.457547L0.707331 5.1523C0.573316 5.28632 0.499756 5.46494 0.499756 5.65539C0.499756 5.84605 0.573422 6.02457 0.707331 6.15858L1.13369 6.58483C1.26749 6.71874 1.44621 6.79251 1.63677 6.79251C1.82722 6.79251 2.01197 6.71874 2.14578 6.58483L4.89066 3.84597L4.89066 12.5474C4.89066 12.9398 5.19779 13.2498 5.59022 13.2498L6.19297 13.2498C6.5854 13.2498 6.9235 12.9398 6.9235 12.5474L6.9235 3.8149L9.68371 6.58472C9.81772 6.71863 9.99158 6.7924 10.1821 6.7924C10.3725 6.7924 10.5489 6.71863 10.6828 6.58472L11.1078 6.15847C11.2418 6.02446 11.3148 5.84595 11.3148 5.65528C11.3148 5.46483 11.2408 5.28621 11.1068 5.1522L6.41207 0.457441C6.27763 0.323109 6.09817 0.249232 5.9074 0.24976C5.71599 0.249338 5.53642 0.323109 5.4022 0.457547Z" fill="white"/>
</svg>
`
module.exports  = () => <SvgXml xml={iconStr}/>
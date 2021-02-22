const React = require('react'),
    {SvgXml} = require('react-native-svg')
const iconStr = `
<svg width="31" height="30" viewBox="0 0 31 30" fill="white" xmlns="http://www.w3.org/2000/svg">
    <rect x="9.56592" y="6.22656" width="21" height="3.9375" rx="1.5" transform="rotate(45 9.56592 6.22656)" fill="white"/>
    <rect x="6.78247" y="21.0762" width="21" height="3.9375" rx="1.5" transform="rotate(-45 6.78247 21.0762)" fill="white"/>
</svg>
`
module.exports  = () => <SvgXml xml={iconStr} />
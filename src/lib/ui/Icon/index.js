const React = require('react'),
    {createElement} = React

const icons = {
    arrowUp: require('./assets/arrowUp.svg').default,
    assistant: require('./assets/assistant.svg').default,
    autoRenew: require('./assets/autorenew.svg').default,
    bellOff: require('./assets/bellOff.svg').default,
    close: require('./assets/close.svg').default,
    'close-white': require('./assets/close-white.svg').default,
    dotsVertical: require('./assets/dotsVertical.svg').default,
    filter: require('./assets/filter.svg').default,
    linkOff: require('./assets/linkOff.svg').default,
    mainMenu: require('./assets/mainMenu.svg').default,
    menu: require('./assets/menu.svg').default,
    scan: require('./assets/scan.svg').default,
    web: require('./assets/web.svg').default,
    claim: require('./assets/claim.svg').default,
    explore: require('./assets/explore.svg').default,
    gear: require('./assets/gear.svg').default,
    helpCircleOutline: require('./assets/helpCircleOutline.svg').default,
    wallet: require('./assets/wallet.svg').default,
    accountCircleOutline: require('./assets/accountCircleOutline.svg').default,
    chevronRight: require('./assets/chevronRight.svg').default,
    chevronLeft: require('./assets/chevronLeft.svg').default,
    check: require('./assets/check.svg').default,
    edit: require('./assets/edit.svg').default,
    eye: require('./assets/eye.svg').default,
    clipboard: require('./assets/clipboard.svg').default,
    ixo: require('./assets/wallet/IXO.svg').default,
    arrowLeft: require('./assets/arrowLeft.svg').default,
}

const Icon = ({name, ...props}) => createElement(icons[name], props)

module.exports = Icon

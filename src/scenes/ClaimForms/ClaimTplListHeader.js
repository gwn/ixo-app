const React = require('react'),
    {Text, StyleSheet} = require('react-native'),
    Icon = require('$/lib/ui/Icon'),
    Button = require('$/lib/ui/Button'),
    Header = require('$/lib/ui/Header'),
    {fontSizes} = require('$/theme')

const ClaimListHeader = ({title, onFilterPress}) => {
    return <Header style={style.root}>
        <Text style={style.title}>{title}</Text>
        <Button
            onPress={onFilterPress}
            type='outlined'
            color='primary' 
            prefix={<Icon name='filter' fill='#83D9F2'/>}
            text='Filter'
            style={style.btn}
        />
    </Header>
}

const style = StyleSheet.create({
    root: {backgroundColor: 'transparent'},
    title:{color: 'white', fontSize: fontSizes.h5},
    btn: {borderRadius: 24},
})

module.exports = ClaimListHeader

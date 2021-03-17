const
    React = require('react'),
    {useState, useCallback} = React,
    {View, Text} = require('react-native'),
    Button = require('./Button'),
    QRScanner = require('./QRScanner'),
    Modal = require('./Modal')


const QRCodeInput = ({value, onChange, editable = true}) => {
    const
        [camShown, toggleCam] = useState(false),

        handleScan = useCallback(scanResp => {
            onChange(scanResp.data)
            toggleCam(false)
        })

    return <View>
        {value && <Text children={value} />}

        {editable &&
            <Button
                type='contained'
                text='Scan'
                onPress={() => toggleCam(true)}
            />}

        <Modal
            visible={editable && camShown}
            onRequestClose={() => toggleCam(false)}
        >
            <QRScanner onScan={handleScan} />
        </Modal>
    </View>
}


module.exports = QRCodeInput

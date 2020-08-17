const ports = {
    'LED_BUILTIN': '13'
};

export default function(portValue){
    return ports[portValue] ?? portValue;
}
function control(left_sensor, right_sensor, speed) {
    var P = 0.55;
    var error = right_sensor - left_sensor;
    return {
        engineTorque: 2500,
        brakingTorque: 0,
        steeringAngle: (P*error),
        log: [
            { name: 'Speed', value: speed, min: 0, max: 200 },
            { name: 'Left_sensor', value: left_sensor, min: 0, max: 1 },
            { name: 'Right_sensor', value: right_sensor, min: 0, max: 1 }
        ]
    };
}


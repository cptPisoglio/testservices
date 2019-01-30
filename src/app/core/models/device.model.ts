export interface IDevice {
    userUid: string;
    fcmToken: string;
    deviceUid: string;
    lastLocation: {
        type: string,
        coordinates: number[] // in order [lng, lat]
    };
}
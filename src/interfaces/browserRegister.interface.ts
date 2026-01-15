export enum DeviceType {
    PC = 0,
    PHONE = 1,
    TABLET = 2
}

export interface BrowserRegister {
  id: number;
  horaRegistro: string;
  deviceType: DeviceType;
  userClickedOnCvButton: boolean;
}

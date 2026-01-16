export enum DeviceType {
    PC = 0,
    PHONE = 1,
    TABLET = 2
}

export interface BrowserRegister {
  id: number | null; // null en la primera request, en el back-end se autogenerará
  dateTimeRequestFirstLoad: Date;
  deviceType: DeviceType;
  userClickedOnCvButton: boolean;
  userClickedOnWeavile: boolean;
  userClickedOnWorkline: boolean;
}

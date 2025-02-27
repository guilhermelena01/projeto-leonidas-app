export enum EnumPictureType {
    PIC1 = "PIC1",
    PIC2 = "PIC2",
    PIC3 = "PIC3"
}

export type EmailData = {
    name: string
    email: string
    topic: string
    phone: string
    base64: string
    message: string
}

export type SvgProps = {
    width?: number;
    height?: number;
    fill?: string;
    rotate?: boolean;
}
export function maskPhone(phone: string) {
    phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    return phone;
}
export interface Address{
    street: string
}
export interface User{
    id: string,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: Address 
}

export interface HandleSelectUserInterface {
    target: HTMLInputElement;
}
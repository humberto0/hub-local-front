import { IMask } from 'react-imask';

export const Mask = {
  register: (value: string) => maskRegister(value),
  date: () => maskDate(),
  phone: (value: string) => maskPhone(value),
  zipcode: () => maskZipCode(),
  onlyNumbers: () => /^\d+$/,
};

const maskRegister = (value: string) => {
  if (value.length <= 14) {
    return '#00.000.000-000';
  }
  return '#0.000.000/0000-00';
};

const maskDate = () => {
  return '#0/00/0000';
};

const maskZipCode = () => {
  return '00000-000';
};

const maskPhone = (value: string) => {
  if (Number(value.replace(/\D/g, '').slice(2)) < 89999999) {
    return '(#0) 0000-0000';
  } else {
    return '(#0) 00000-0000';
  }
};
export const resolvePhoneMask = (value: string) => {
  return IMask.createMask({ mask: '(00) 00000-0000' }).resolve(value);
};

export const resolveZipCodeMask = (value: string) => {
  return IMask.createMask({ mask: '00000-000' }).resolve(value);
};

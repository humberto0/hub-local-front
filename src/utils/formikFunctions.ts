export const getErrors = (formikInstance: any, name: string) => {
  return formikInstance.touched[name] && Boolean(formikInstance.errors[name]);
};

export const getHelperText = (formikInstance: any, name: string) => {
  return formikInstance.touched[name] && formikInstance.errors[name];
};

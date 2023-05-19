import { FC, useCallback } from "react";
import * as S from "./styles";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/images/logo.svg";
import { InputText } from "../../components/input";
import { SignInFormSchema, signInFormSchema } from "./validation";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { getErrors, getHelperText } from "../../utils/formikFunctions";
import { Banner } from "../../components/banner";

export const SignUp: FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = useCallback(async (data: SignInFormSchema) => {
    console.log(data);
  }, []);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const result = signInFormSchema.safeParse(values);

      if (!result.success) {
        return result.error.formErrors.fieldErrors;
      }
    },
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Grid container>
      <Banner />
      <Grid item xs={12} md={6}>
        <S.FormSection>
          <S.Logo src={Logo} alt="HubLocal" />
          <S.FormContainer onSubmit={formik.handleSubmit}>
            <S.LabelForm>Name</S.LabelForm>
            <InputText
              name="name"
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getErrors(formik, "name")}
              helperText={getHelperText(formik, "name")}
            />
            <S.LabelForm>Email</S.LabelForm>
            <InputText
              name="email"
              id="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getErrors(formik, "email")}
              helperText={getHelperText(formik, "email")}
            />
            <S.LabelForm>Senha</S.LabelForm>
            <InputText
              name="password"
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getErrors(formik, "password")}
              helperText={getHelperText(formik, "password")}
            />
            <S.LabelForm>Repetir Senha</S.LabelForm>
            <InputText
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getErrors(formik, "confirmPassword")}
              helperText={getHelperText(formik, "confirmPassword")}
            />
            <S.ButtonSignIn
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Registrar
            </S.ButtonSignIn>
            <S.ButtonSignIn
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleRedirect}
              fullWidth
            >
              Logar
            </S.ButtonSignIn>
          </S.FormContainer>
        </S.FormSection>
      </Grid>
    </Grid>
  );
};

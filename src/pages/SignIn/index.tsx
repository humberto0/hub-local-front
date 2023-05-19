import { FC, useCallback, useEffect } from "react";
import * as S from "./styles";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/images/logo.svg";
import { InputText } from "../../components/input";
import { SignInFormSchema, signInFormSchema } from "./validation";
import { store } from "../../redux/store";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { getErrors, getHelperText } from "../../utils/formikFunctions";
import { userLogin } from "../../redux/thunks/authThunk";
import { Banner } from "../../components/banner";

export const SignIn: FC = () => {
  const initialValues = { email: "", password: "" };
  const handleSubmit = useCallback(async (data: SignInFormSchema) => {
    await store.dispatch(userLogin(data));
  }, []);
  const isAuth = store.getState().authReducer.isAuthenticated;
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth, navigate]);

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
    navigate("/sign-up");
  };

  return (
    <Grid container>
      <Banner />
      <Grid item xs={12} md={6}>
        <S.FormSection>
          <S.Logo src={Logo} alt="HubLocal" />
          <S.FormContainer onSubmit={formik.handleSubmit}>
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
            <S.ButtonSignIn
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Logar
            </S.ButtonSignIn>
            <S.ButtonSignIn
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleRedirect}
              fullWidth
            >
              Criar conta
            </S.ButtonSignIn>
          </S.FormContainer>
        </S.FormSection>
      </Grid>
    </Grid>
  );
};

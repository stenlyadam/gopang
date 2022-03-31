import {combineReducers} from 'redux';

// reducer untuk register
const initialRegisterPageUser = {
  form: {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ConfirmPassword: '',
  },
  title: 'Sign Up',
  desc: 'First create your account',
};
const RegisterReducer = (state = initialRegisterPageUser, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

// reducer untuk Login
const initialLoginPageUser = {
  form: {
    Email: '',
    Password: '',
  },
  desc: 'Enter your email and password',
  title: 'Sign In',
  user: 'User',
  isLogin: true,
};
const LoginReducer = (state = initialLoginPageUser, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

// reducer untuk Forget Password
const initialForgetPageUser = {
  form: {
    FrgtEmail: '',
  },
};
const ForgetReducer = (state = initialForgetPageUser, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

// reducer untuk Biodata
const initialBiodataPage = {
  form: {
    FirstName: '',
    LastName: '',
    Email: '',
    MobilePhone: '',
  },
};
const BiodataReducer = (state = initialBiodataPage, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

// untuk mengcombine seluruh reducer
const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  ForgetReducer,
  BiodataReducer,
});

export default reducer;

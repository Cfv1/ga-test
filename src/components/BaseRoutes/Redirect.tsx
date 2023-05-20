import {Navigate} from "react-router-dom";
import {HOME_PAGE_PATH, LOGIN_PAGE_PATH} from 'src/common/paths';

export const RedirectToHome = () => <Navigate to={HOME_PAGE_PATH} />;
export const RedirectToLogin = () => <Navigate to={LOGIN_PAGE_PATH} />;

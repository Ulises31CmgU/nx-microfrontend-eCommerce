import { useDispatch, useSelector } from 'react-redux';
import { UserCredentials } from '../../types/user.types';

import {
  selectIsUserLoggedIn,
  selectIsUserRequesting,
} from '../selectors/user.selectors';
import { userLoginRequest, userLogout } from '../slices/user.slice';

export function useUserState() {
  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const isRequesting = useSelector(selectIsUserRequesting);

  const dispatch = useDispatch();

  return {
    isLoggedIn,
    isRequesting,
    login: (credentials: UserCredentials) =>
      dispatch(userLoginRequest(credentials)),
    logout: () => dispatch(userLogout()),
  };
}

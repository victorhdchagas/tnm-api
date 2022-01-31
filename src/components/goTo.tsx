import {useNavigation} from '@react-navigation/native';
const useCustomNav = () => {
  const navigation = useNavigation();

  const goTo = to => navigation.navigate(to);

  return {goTo};
};
export default useCustomNav;

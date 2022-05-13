import { extendTheme, theme as chakraTheme, ThemeOverride } from '@chakra-ui/react';
import SelectStyles from '@components/Select/select.styles';

const theme: ThemeOverride = extendTheme(chakraTheme, {
  components: {
    SelectStyles,
  },
});

export default theme;

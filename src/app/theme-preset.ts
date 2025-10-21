import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const SpikerzPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E6F4EC',
      100: '#CCE9D9',
      200: '#99D3B3',
      300: '#66BD8C',
      400: '#33A766',
      500: '#00732E',
      600: '#006829',
      700: '#005C24',
      800: '#004F1E',
      900: '#004419',
      950: '#003814',
    },
  },
  components: {
    borderRadius: '15px',
  },
});

export default SpikerzPreset;

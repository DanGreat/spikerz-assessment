import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const SpikerzPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E6F6EC',
      100: '#C1EAD1',
      200: '#8DDCAE',
      300: '#59CD8A',
      400: '#2FC46E',
      500: '#02983E',
      600: '#028B39',
      700: '#027832',
      800: '#02652B',
      900: '#024D21',
      950: '#013417',
    },
  },
});

export default SpikerzPreset;

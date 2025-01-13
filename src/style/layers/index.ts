import { defineLayerStyles } from '@chakra-ui/react';

const layerStyles = defineLayerStyles({
  floatBottom: {
    description: 'floatBottom',
    value: {
      position: 'fixed',
      bottom: '0',
      w: 'full',
    },
  },
  floatBottomActions: {
    description: 'floatBottomActions',
    value: {
      position: 'fixed',
      bottom: '0',
      w: 'full',
      px: '4',
      py: '4',
      pb: '8',
      gap: '2',
      flexDirection: 'row',
      borderTop: '1px solid',
      borderColor: 'divider',
    },
  },
});

export default layerStyles;

// @flow

export const ERROR_TYPES = {
  BELOW_VALUE: 'BELOW_VALUE',
  ABOVE_VALUE: 'ABOVE_VALUE',
};

const getErrorMessage = (type: string, value: number): Object => {
  const errors = {
    [ERROR_TYPES.BELOW_VALUE]: {
      message: `Pending Rs. ${value.toFixed(2)}`,
      type: ERROR_TYPES.BELOW_VALUE,
    },

    [ERROR_TYPES.ABOVE_VALUE]: {
      message: `Additional $ ${value.toFixed(2)}`,
      type: ERROR_TYPES.ABOVE_VALUE,
    },
  };

  return errors[type];
};

export default getErrorMessage;

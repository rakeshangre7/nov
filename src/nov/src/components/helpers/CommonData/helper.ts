const getStorybookDefaultData = (defaultValue: unknown) => {
  return {
    table: {
      defaultValue: { summary: defaultValue },
    },
  };
};
const dateFormat = 'MMM DD, YYYY';

export { getStorybookDefaultData, dateFormat };

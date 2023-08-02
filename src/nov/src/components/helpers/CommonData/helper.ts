const getStorybookDefaultData = (defaultValue: unknown) => {
  return {
    table: {
      defaultValue: { summary: defaultValue },
    },
  };
};

export { getStorybookDefaultData };

const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  http: {
    timeout: 5000,
  },
});

export default configuration;

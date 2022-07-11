import app from './app';
import config from './config';

app.listen(config.PORT, () => {
    console.log(`The service is running ✅ 🚀 on port ${config.PORT} in ${config.ENVIRONMENT} environment`);
});
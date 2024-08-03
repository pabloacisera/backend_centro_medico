"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const frontendUrl = process.env.FRONTEND_URL;
    console.log('Configuring CORS with origin:', frontendUrl);
    app.use(cors({
        origin: frontendUrl,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    }));
    app.setGlobalPrefix('api/v2');
    const port = process.env.PORT || 3000;
    console.log('Listening on port:', port);
    await app.listen(port);
}
//# sourceMappingURL=main.js.map
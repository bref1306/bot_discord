declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            apiKey: string;
            enviroment: "dev" | "prod" | "debug";
        }
    }
}
export{};
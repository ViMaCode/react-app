import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


export function buildDevServer(option: BuildOptions): DevServerConfiguration {
    console.log('=====> Доработать момент в env', option.browser)
    return {
        port: option.port,
        open: {
            app: {
                name: option.browser
            }
        },
        historyApiFallback: true,
    }
}
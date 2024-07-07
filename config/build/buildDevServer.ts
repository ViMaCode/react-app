import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


export function buildDevServer(option: BuildOptions): DevServerConfiguration {
    return {
        port: option.port,
        open: {
            app: {
                name: option.browser
            }
        },
        historyApiFallback: true,
        hot: true,
    }
}
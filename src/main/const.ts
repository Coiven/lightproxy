import path from 'path';
import os from 'os';

import { app } from 'electron';

const userData = app.getPath('appData');

declare let __static: string;

export const LIGHTPROXY_HOME_PATH = path.join(userData, 'LightProxy');

export const LIGHTPROXY_CERT_DIR_PATH = path.join(LIGHTPROXY_HOME_PATH, 'cert');
export const CERT_FILE_NAME = 'root.crt';
export const CERT_KEY_FILE_NAME = 'root.key';

export const LIGHTPROXY_CERT_KEY_PATH = path.join(LIGHTPROXY_CERT_DIR_PATH, CERT_KEY_FILE_NAME);

// export const PROXY_CONF_ORIGIN_HELPER_PATH = path.join(__static, './proxy_conf_helper');

export const LIGHTPROXY_ICON_TEMPLATE_PATH = path.join(__static, 'iconTemplate.png');

const systemType = os.type();

export const SYSTEM_IS_MACOS = systemType === 'Darwin';

export const LIGHTPROXY_UPDATE_DIR = path.join(LIGHTPROXY_HOME_PATH, './update');
export const LIGHTPROXY_UPDATE_CONFIG = path.join(LIGHTPROXY_UPDATE_DIR, './config.json');
export const LIGHTPROXY_FILES_DIR = path.join(LIGHTPROXY_HOME_PATH, './files');
export const PROXY_CONF_HELPER_FILE_PATH = path.join(LIGHTPROXY_FILES_DIR, './proxy_conf_helper');
export const PROXY_CONF_HELPER_PATH = path.join(LIGHTPROXY_HOME_PATH, './proxy_conf_helper');
export const PROXY_REFRESH_WINDOWS_HELPER_PATH = path.join(LIGHTPROXY_FILES_DIR, './win_proxy_helper');

export const LIGHTPROXY_NODEJS_PATH = path.join(
    LIGHTPROXY_FILES_DIR,
    '/node/' + (SYSTEM_IS_MACOS ? 'lightproxy-node-macos' : 'lightproxy-node-win.exe'),
);

export const LIGHTPROXY_USERDATA_DIR = app.getPath('userData');
export const LIGHTPROXY_CFG_FILE_PATH = path.join(LIGHTPROXY_USERDATA_DIR, './config.json');

export const GITHUB_PROJECT_PAGE = 'https://github.com/alibaba/lightproxy';
export const NEW_ISSUE_PAGE = 'https://github.com/alibaba/lightproxy/issues/new';

// @ts-ignore
export const APP_VERSION = __PACKAGE_INFO_VERSION__;

// @ts-ignore
export const IS_BUILD_FOR_PR = __BUILD_FOR_TRAVIS_PR__ ? true : false;

// @ts-ignore
export const BUILD_FOR_TRAVIS_COMMIT = __BUILD_FOR_TRAVIS_COMMIT__;

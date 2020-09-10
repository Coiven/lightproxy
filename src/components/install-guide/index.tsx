import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../common/redux/state';
import { appInstallHelper, APP_INSTALL_HELPER } from '../../common/redux/actions';

export const InstallGuide = () => {
    const helperInstalled = useSelector((state: State) => {
        return state.app.installed.helper;
    }) as boolean;
    
    const appInstallHelperLoading = useSelector((state: State) => {
        return state.__loading__[APP_INSTALL_HELPER];
    }) as boolean;

    const dispatch = useDispatch();

    const installHelper = () => dispatch(appInstallHelper());
    
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Install Guide</div>
      <div className="text-gray-700 p-4">
        <button onClick={installHelper} className="bg-blue-500 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {appInstallHelperLoading ? 
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>: null
            }
            Install Helper {helperInstalled ? 'DONE': ''}
        </button>
        
      </div>
    </div>
    
  </div>;
  
}
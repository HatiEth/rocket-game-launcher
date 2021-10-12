import { dialog, ipcMain, ipcRenderer, remote } from 'electron';
import { exists, existsSync, readFileSync } from 'fs';
import React, { useState } from 'react';



// local dependencies
// import { getVersion } from 'common/util';

function getVersion() {
    return 0;
}

// import styles (for compilation)
import './styles.scss';

import logo from './Logo.svg'
import { MESSAGES } from 'common/messages';

// export a react component
export default (props) => {

    function loadRocketfile() {
        const file = remote.dialog.showOpenDialogSync(remote.BrowserWindow, {
            buttonLabel: "Load",
            filters: [
                { name: "Rocket file", extensions: ['rocket'] }
            ],
            title: "Load .rocket file"
        });
        if (file && file.length > 0) {
            const R = ipcRenderer.sendSync(MESSAGES.OPEN_ROCKETFILE, file[0]);
            console.log(R);
        }
    }

    return (
        <div className='hello'>
            <div className="launch">
                <img className="logo" src={logo} alt="" />
                <h1 className="title">Rocket Game Launcher</h1>
                <h1>Select a rocket file.</h1>
                <button
                    onClick={() => loadRocketfile()}
                >Browse file</button>

            </div>
        </div>
    );
};
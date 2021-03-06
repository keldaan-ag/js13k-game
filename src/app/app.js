import html from 'innerself/index';
import Commands from './components/commands';
import Gold from './components/gold';
import Timer from './components/timer';
import Game from './components/game';
import Controls from './components/controls';

export default function App() {
    return html`
        <div style='height:100%; font-family:Verdana; color:white; background-color:black'>
            <div style='display:flex; justify-content:space-even;'>
                ${Timer()}
                ${Gold()}
            </div>
            <div style='display:flex; justify-content:space-evenly; height:90%;'>
                ${Commands()}
                ${Game()}
                ${Controls()}
            </div>
        </div>
    `;
}

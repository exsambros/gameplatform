import { AUTO, Scale, Game } from 'phaser'

import MainMenuScene from './MainMenuScene'
import Lv1Scene from './Lv1Scene'
import Lose1Scene from './Lose1Scene'
import win1Scene from './win1Scene'
import Lv2Scene from './LV2Scene'
import win2Scene from './Win2Scene'
import Lose2Scene from './Lose2'
import Lv3Scene from './LV3Scene'
import Lose3Scene from './Lose3Scene'
import Win3Scene from '../Win3Scene'



const config = {
	type: AUTO,
	backgroundColor: '#32A5E7',
	scale: {
		width: 1920,
		height: 1080,
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false,
		},
	},
	scene: [MainMenuScene,Lv1Scene,win1Scene,Lose1Scene,Lv2Scene,win2Scene,Lose2Scene,Lv3Scene,Win3Scene,Lose3Scene]
	//scene: [Lv3Scene]
	
}

/* eslint-disable-next-line */
export default new Game(config)

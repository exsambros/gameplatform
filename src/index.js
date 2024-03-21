import { AUTO, Scale, Game } from 'phaser'

import MainMenuScene from './scenes/MainMenuScene'
import Lv1Scene from './scenes/Lv1Scene'
import Lose1Scene from './scenes/Lose1Scene'
import win1Scene from './scenes/win1Scene'
import Lv2Scene from './scenes/LV2Scene'
import win2Scene from './scenes/Win2Scene'
import Lose2Scene from './scenes/Lose2'
import Lv3Scene from './scenes/Lv3Scene'
import Lose3Scene from './scenes/Lose3'
import Win3Scene from './scenes/Win3'




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
	scene: [MainMenuScene,Lv1Scene,Lose1Scene,win1Scene,Lv2Scene,win2Scene,Lose2Scene,Lv3Scene,Lose3Scene,Win3Scene]
	
	
	
}

/* eslint-disable-next-line */
export default new Game(config)

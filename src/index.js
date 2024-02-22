import { AUTO, Scale, Game } from 'phaser'

import MainMenuScene from './scenes/MainMenuScene'
import Lv1Scene from './scenes/lv1Scene'
import Lose1Scene from './scenes/Lose1Scene'



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
	scene: [MainMenuScene,Lv1Scene,Lose1Scene]
}

/* eslint-disable-next-line */
export default new Game(config)

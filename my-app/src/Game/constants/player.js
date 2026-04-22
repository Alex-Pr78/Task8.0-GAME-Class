import { STATUS } from './status';

export const PLAYER = {
	CROSS: 0,
	NOUGHT: 1,
	NOBODY: 2,
}

export const PLAYER_ACTION = {
	[STATUS.TURN]: 'Ходит',
	[STATUS.WIN]: 'Победил',
};

export const PLAYER_NAME = {
	[PLAYER.CROSS]: 'крестик',
	[PLAYER.NOUGHT]: 'нолик',
};

export const PLAYER_SIGN = {
	[PLAYER.CROSS]: 'X',
	[PLAYER.NOUGHT]: '0',
	[PLAYER.NOBODY]: '',
};

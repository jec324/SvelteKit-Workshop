const API = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch }) => {
	/**
	 * Represents a character object
	 * @typedef {Object} Character
	 * @property {number} id - The unique identifier of the character.
	 * @property {string} name - The name of the character.
	 * @property {string} image - The URL of the character's image.
	 * @property {string} occupation - The occupation of the character.
	 */

	/** @type {Response} */
    // console.log(API + '/characters', "this is the response");
	const response = await fetch(API + '/characters');

	/** @type {Character[]} */
	const characters = await response.json();

	return {
		characters
	};
};

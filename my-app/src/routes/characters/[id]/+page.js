const API = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({ fetch, params }) => {

    /**
     * @typedef {Object} Relative
     * @property {string} name - The name of the relative of the Detailed Character.
     */

    /**
     * Represents a Detailed Character Object
     * @typedef {Object} DetailedCharacter
     * @property {number} id - The unique identified of the character.
     * @property {string} name - The name of the character.
     * @property {string} image - The URL of the character's image.
     * @property {string} gender - The character's gender.
     * @property {string} hairColor - The haircolor of the character.
     * @property {string} occupation - The occupation of the character.
     * @property {string} firstEpisode - The first episode of the Character's Appearance within the show.
     * @property {string} voicedBy - The name of the Character's Voice Actor/Actress
     * @property {string} url - The URL of the character's detailed page
     * @property {string} wikiUrl - The URL of the character's wiki page.
     * @property {Relative[]} Relative - The array of relatives of the character.
     */
    const { id } = params;
    
    /** @type {Response} */
    // console.log(API);
    const response = await fetch(API + '/characters/' + id);
    // console.log(response, "this is the response");

    /** @type {DetailedCharacter[]} */
    const DetailedCharacter = await response.json();
    // console.log(DetailedCharacter);

    return {
       DetailedCharacter
    };
};
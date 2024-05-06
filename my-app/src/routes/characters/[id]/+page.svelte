<script>
    import Character from './Character.svelte'
    export let data;

    // let character;

    // Log the value of DetailedCharacter to the console
    //console.log("here's the [id] data", data);
    //console.log(data.DetailedCharacter.name)

    $: character = data?.DetailedCharacter;
    //console.log(character);
</script>

<svelte:head>
    <title>{character.name} | Characters</title>
</svelte:head>

<Character {...character} />

<a href="/characters">Back</a>


<style>
</style>

<script>
    export let data;

    let character;

    // Log the value of DetailedCharacter to the console
    //console.log("here's the [id] data", data);
    //console.log(data.DetailedCharacter.name)

    $: character = data?.DetailedCharacter;
    //console.log(character);
</script>

<svelte:head>
    <title>{character.name}</title>
</svelte:head>

<h1>{character.name}</h1>

<a href="/characters">Characters</a>


<style>
</style>

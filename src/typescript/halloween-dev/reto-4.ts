//* https://www.halloween.dev/es/retos/2024/4

function findTheKiller(whisper: string, suspects: string[]): string {
    const [...lowerSuspects] = suspects.map(suspect => suspect.toLowerCase());
    const maxNameLength = Math.max(...suspects.map(suspect => suspect.length));
    const isCompleteName = whisper.at(-1) === '$';
    const filteredWhisper =
        isCompleteName ?
            whisper.slice(0, -1) :
            whisper;
    const filteredSuspects =
        isCompleteName ?
            lowerSuspects.filter(susp => susp.length === whisper.length - 1) :
            lowerSuspects.filter(susp => susp.length >= whisper.length);
    let finalSuspects: string[] = [];
    for (const suspect of filteredSuspects) {
        let isValidSuspect = true;
        for (const [index, char] of [...filteredWhisper].entries()) {
            if (char !== '~' || suspect[index] === char) continue;
            isValidSuspect = false;
        }
        if (isValidSuspect) finalSuspects.push(suspect);
    }
    return finalSuspects.join(',');
}

const result = findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])

console.log(result); // Esperamos Dracula
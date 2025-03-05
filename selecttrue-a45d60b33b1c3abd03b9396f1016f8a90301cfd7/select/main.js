const manager = new Manager();
Gomszab.addFileUploader(fileResult => {
    const fileLines = fileResult.split('\n');
    fileLines.forEach(line => {
        const fields = line.split(';');
        const answers = [fields[1], fields[2], fields[3], fields[4]]; 
        const question = new Question(fields[0], answers, fields[5].trim());
        manager.add(question); 
    });
    manager.start(); 
});

const deckArea = new DeckArea('deck', manager); 
const solutionArea = new SolutionArea('solution', manager); 

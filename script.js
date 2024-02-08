let name = document.getElementById('name');
let copy = document.getElementById('copy');
let about = document.getElementById('about');
let okay = document.getElementById('ok');
let blockAbout = document.getElementById('blockAbout');
let create3x = document.getElementById('createTripple');
let create2x = document.getElementById('createDouble');

let wordsFor3xGenerator = {
    attribute: ['bloody', 'evil', 'sinister', 'shadow', 'apocalyptic', 'dark', 'gloomy', 'brutal', 'demonic', 'devastating', 'cruel', 'creeping', 'mean', 'grim', 'toxic'],
    what: ['body', 'mind', 'fate', 'hope', 'skull', 'skin', 'soul', 'human', 'victim'],
    who: ['butcher', 'tormentor', 'slayer', 'crusher', 'ruiner', 
          'reaper', 'suffocator', 'devastator', 'torturer', 'devourer', 'catcher', 'blinder']
};

let wordsFor2xGenerator = {
    attribute: ['bloody', 'evil', 'sinister', 'shadow', 'apocalyptic', 'dark', 'gloomy', 'brutal', 'demonic', 'devastating', 'cruel', 'creeping', 'mean', 'grim',
                'body', 'mind', 'fate', 'hope', 'skull', 'skin', 'soul', 'human', 'victim', 'toxic'],
    who: ['butcher', 'tormentor', 'slayer', 'crusher', 'ruiner', 'reaper', 
          'maniac', 'suffocator', 'devastator', 'torturer', 'devourer', 'catcher', 'blinder']
}

function createStartName(){
    name.textContent = 'A very brutal name...';
}
createStartName();

function copyNewName(){
    let newName = name.textContent;
    navigator.clipboard.writeText(newName);
}

function create3xNewName(){
    name.textContent = wordsFor3xGenerator.attribute[Math.floor(Math.random() * wordsFor3xGenerator.attribute.length)] + ' ' 
                       + wordsFor3xGenerator.what[Math.floor(Math.random() * wordsFor3xGenerator.what.length)] + ' ' 
                       + wordsFor3xGenerator.who[Math.floor(Math.random() * wordsFor3xGenerator.who.length)];
}

function create2xNewName(){
    name.textContent = wordsFor2xGenerator.attribute[Math.floor(Math.random() * wordsFor2xGenerator.attribute.length)] + ' '
                       + wordsFor2xGenerator.who[Math.floor(Math.random() * wordsFor2xGenerator.who.length)]
}

function showAbout(){
    blockAbout.style.cssText = 'display: flex';
    okay.addEventListener('click', closeAbout);

    function closeAbout(){
        blockAbout.style.cssText = 'display: none';
    }    
}

copy.addEventListener('click', copyNewName);
create3x.addEventListener('click', create3xNewName);
create2x.addEventListener('click', create2xNewName);
about.addEventListener('click', showAbout);

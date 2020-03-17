// Loading Spark AR Modules
const Materials = require('Materials');
const PersonSegmentation = require('PersonSegmentation');
const Scene = require('Scene');
const d = require('Diagnostics');
const TouchGestures = require('TouchGestures');

// Localiza el rectángulo y el material en la escena y los activos
const user_rect = Scene.root.find('user');
const bg_rect = Scene.root.find('bg');
const user_mat = Materials.get('user_mat');

user_mat.opacity = PersonSegmentation.foregroundPercent;
user_rect.hidden = PersonSegmentation.hasForeground.not();

let tap_counter = 0;

TouchGestures.onTap().subscribe((gesture) => {
    tap_counter = tap_counter % 2;

    let toggler;

    if(tap_counter == 0){
        toggler = true
    }else{
        toggler = false;
    }
        
    user_rect.hidden = toggler;  
    bg_rect.hidden = toggler;  

    tap_counter = tap_counter+1;

    d.log(toggler);
});
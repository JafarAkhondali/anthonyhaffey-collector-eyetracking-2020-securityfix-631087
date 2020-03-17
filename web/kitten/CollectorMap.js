///////////////
// Libraries //
///////////////

//Publicly available libraries
<<<<<<< HEAD
window.jQuery        || document.write('<script src="../libraries/jquery-3.3.1.min><\/script>');

window.bootstrap || document.write('<script src="../libraries/bootstrap.4.0.min"><\/script><link href="../libraries/bootstrapCollector.min.css" rel="stylesheet">');

window.Papa          || document.write('<script src="../libraries/papaparse.4.3.6.min"><\/script>');

// Collector specific

window.Handsontable || document.write('<link rel="stylesheet" href="https://anthonyhaffey.github.io/my-collector/kitten/Studies/handsontables/handsontables.full.css">' +
'<script type="text/javascript" charset="utf-8" src="https://anthonyhaffey.github.io/my-collector/kitten/Studies/handsontables/handsontables.full.js">' + 
'<\/script><script type="text/javascript" charset="utf-8" src="https://anthonyhaffey.github.io/my-collector/kitten/Studies/HandsontableFunctions.js"><\/script>');
=======
window.jQuery        || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"><\/script>');

window.bootstrap || document.write('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"><\/script><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">');

window.Papa          || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"><\/script>');

// Collector specific

window.Handsontable || document.write('<link rel="stylesheet" href="https://anthonyhaffey.github.io/my-collector/kitten/IndexTabs/Studies/handsontables/handsontables.full.css">' +
'<script type="text/javascript" charset="utf-8" src="https://anthonyhaffey.github.io/my-collector/kitten/IndexTabs/Studies/handsontables/handsontables.full.js">' + 
'<\/script><script type="text/javascript" charset="utf-8" src="https://anthonyhaffey.github.io/my-collector/kitten/IndexTabs/Studies/HandsontableFunctions.js"><\/script>');
>>>>>>> 94b84c7904574e43669bbc18777b7c6e9dc17b0f

window.clean_obj_keys || document.write('<script src="https://anthonyhaffey.github.io/my-collector/kitten/jsFunctions.js"><\/script>');


<<<<<<< HEAD
var isolation_map = {
=======

var isolation_map = {
  //IndexTabs
>>>>>>> 94b84c7904574e43669bbc18777b7c6e9dc17b0f
  Default:{
    DefaultSurveys:{
      'autism_quotient.csv'     : 'file',
      'demographics.csv'        : 'file',
      'empathy_quotient_40.csv' : 'file'
    },
    DefaultTrialtypes:{
      "instruct.html" : "file",
      "survey.html"   : "file" 
    },
    "default_experiment.json" : "file",
      //stuff here
  },
<<<<<<< HEAD
  Data:{
    "ListData.php" : "file",
  },  

  Help:{
    "CondHelp.json" : "file",
    "GrapHelp.json" : "file",
    "MainHelp.json" : "file",
    "ProcHelp.json" : "file",
    "SurvHelp.json" : "file",
  },
  Studies:{
    SheetEditor:{        
      "SheetEditor.html" : "file"
    },
    TrialTypeEditor:{
      "TrialTypeEditor.html" : "file",
      "Graphic.html"         : "file",
    }
  },
  Surveys : {
    'Surveys.html'    : 'file',
    'surveyTypes.csv' : 'file'
  },
  "CollectorMap.js" : "file",
  "jsFunctions.js"  : "file",
  "Libraries.html"  : "file",
=======
  IndexTabs:{
    Data:{
      "ListData.php" : "file",
    },  

    Help:{
      "CondHelp.json" : "file",
      "GrapHelp.json" : "file",
      "MainHelp.json" : "file",
      "ProcHelp.json" : "file",
      "SurvHelp.json" : "file",
    },
    Studies:{
      ExperimentEditor:{        
        "ExperimentEditor.html" : "file"
      },
      TrialTypeEditor:{
        "TrialTypeEditor.html" : "file",
        "Graphic.html"         : "file",
      }
    },
    Surveys : {
      'Surveys.html'    : 'file',
      'surveyTypes.csv' : 'file'
    }
  },
  "CollectorMap.js" : "file",
  "jsFunctions.js"  : "file",
  "libraries.html"  : "file",
>>>>>>> 94b84c7904574e43669bbc18777b7c6e9dc17b0f
  "RunStudy.html"   : "file"
}

function this_map(this_item){
  //generate a map based on the user being at the top level
  //list everything on this level
  var complete_map = {};
  var item_level   = -1;
  var split_directory = [];
  function populate_map(current_directory,this_item){
    selected_directory = isolation_map;
    if(current_directory !== ""){
      split_directory = current_directory.split("/");
      split_directory.forEach(function(this_direct){
        selected_directory = selected_directory[this_direct];
      });
      current_directory += "/";
    }
    if(typeof(selected_directory[this_item]) !== "undefined"){
      //we've found the item
      console.dir(split_directory);
      item_level = split_directory.length;
    }

    current_level_contents = Object.keys(selected_directory);
    current_level_files = current_level_contents.filter(function(item){
      return item.indexOf(".") !== -1;
    });
    current_level_folders = current_level_contents.filter(function(item){
      return item.indexOf(".") == -1;
    });

    current_level_files.forEach(function(this_file){      
      complete_map[this_file] = current_directory + this_file;
    });
    current_level_folders.forEach(function(this_folder){
      complete_map[this_folder] = current_directory + this_folder;
      populate_map(current_directory + this_folder,this_item);
    });
  }
  populate_map("",this_item);
  if(this_item == ""){
    var dots_before = "";
  } else {
    var dots_before = "../".repeat(item_level);
  }
  
  Object.keys(complete_map).forEach(function(item){
    complete_map[item] = dots_before + complete_map[item];
  });
  return complete_map;
}



// Below code is to enable isolated development of surveys code

if(typeof(master_json) == "undefined"){
  master_json = {
    surveys: {
      default_surveys:{},
    },
    trialtypes : {
      user_trialtypes : {},
      default_trialtypes: {}
    }
  }
}
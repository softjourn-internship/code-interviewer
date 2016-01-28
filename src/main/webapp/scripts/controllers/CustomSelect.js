adminPanelApp.controller('CustomSelect', ['$scope',
  function ($scope) {

    // CUSTOM SELECT

    selectData = {
      role:['Admin', 'Manager', 'Recruter'],
      engLevel:['Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient'],
      speciality:['Front-End Developer', 'Java Developer', '.NET Developer', 'JavaScript Developer'],
      langProg:['Java', 'JavaSript', 'HTML', 'CSS']
    };

    role = undefined;
    engLevel = 'engLevel';
    speciality = undefined;
    langProg = undefined;

    titleSelect = function(title, id, disabled) {
      $('div#title_' + id).html("<div id='title_" + id + "'>" + title + "</div></span>");
      if (disabled) { $('div#title_' + id).css('color', '#ddd'); $('div#title_' + id + ':hover').css('color', '#333'); }
      else $('div#title_' + id).css('color', '#333');
      return title;
    }

    $scope.createSelect = function(id) {
          var disabled = "Select " + id;
          var select = 
            "<span id='select" + id + "' class='select selectNewPart'>";
          var option = 

            "<div id='menu" + id + "' class='menu selectMenu inSentBox'><ul>";
        
          var items = "<li id='disabled'>" + disabled + "</li>";
          var i = 0;
          var data;
          if (id === 'role') {data = selectData.role; role = id;}
          if (id === 'engLevel') {data = selectData.engLevel; value_engLevel = 'Select ' + engLevel;}
          if (id === 'speciality') {data = selectData.speciality; speciality = id; value_speciality = 'Select ' + speciality;}
          if (id === 'langProg') {data = selectData.langProg; langProg = id;}

          while (i < data.length){
            items += "<li onclick='value_" + id + " = titleSelect(selectData." + id + "[" + i + "], " + id + ", false)'>" + data[i] + "</li>";
            i++;
          }
          option =  option + items + "</ul></div>";
          
          $('div#select_' + id).html(select + "<div id='title_" + id + "'>" + disabled + "</div></span>" + option);

          $(document).on("click","span#select" + id, function(){
            $('div#menu' + id).fadeIn('fast');
          });
      };
  }]);
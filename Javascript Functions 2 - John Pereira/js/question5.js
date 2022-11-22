/*****************************************************************************
 * Function: convertFirstLetterToUpper(parWord)                              *
 * Function Description:                                                     *
 * This function converts the first letter of parWord to upper case.         *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parQuizNumber. This parameter is made up of the word 'quiz ' and a     *
 *    number. This will be used as id and quiz label. For example: if        *
 *    parQuizNumber has the value of quiz1, then id='quiz1' and              *
 *    quiz label = "Quiz 1".                                                 *
 *****************************************************************************/
 function convertFirstLetterToUpper(parWord)
 {
   return parWord.charAt(0).toUpperCase()+parWord.substring(1);
 }//convertFirstLetterToUpper(parWord)

/*****************************************************************************
 * Function: createElementWithAttributes(parElement, parAttributeList)       *
 * Function Description:                                                     *
 * This function creates an element with any number of attributes            *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parAttributeList. Attribute(s) in json format without stringifying     *
 *    example: {src: "myImage.jpg", class:"w-100", alt:"Image not loaded"}   *
 *****************************************************************************/
function createElementWithAttributes(parElement, parAttributeList)
{
  const thisElement = document.createElement(parElement);

  for(attribute in parAttributeList){
    thisAttribute = document.createAttribute(attribute);
    thisAttribute.value = parAttributeList[attribute];
    thisElement.setAttributeNode(thisAttribute);
  }//for(attribute in parAttributeList)
  return thisElement;
}//function createElementWithAttributes(parElement, parAttributeList)

/*****************************************************************************
 * Function: createElementWithTextNode(parElement, parTextNode)              *
 * Function Description:                                                     *
 * This function creates an element with text node. example: <h1>Hello</h1>  *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parTextNode. Text node in string format. e.g. "Hello"                  *
 *****************************************************************************/
function createElementWithTextNode(parElement, parTextNode) {
    const thisNewElement = document.createElement(parElement);
    const thisTitleTextNode = document.createTextNode(parTextNode);
    thisNewElement.appendChild(thisTitleTextNode);
    return thisNewElement;
}//function createElementWithTextNode(parElement, parTextNode)

/*****************************************************************************
 * Function: createElementWithAttributesAndTextNode(parElement               *
 *                                                 , parAttributeList        *
 *                                                 , parTextNode)            *
 * Function Description:                                                     *
 * This function creates an element with any number of attributes            *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parAttributeList. Attribute(s) in json format without stringifying     *
 *    example: {src: "myImage.jpg", class:"w-100", alt:"Image not loaded"}   *
 * 3. parTextNode. Text node in string format. e.g. "Hello"                  *
 *****************************************************************************/
 function createElementWithAttributesAndTextNode(parElement, parAttributeList, parTextNode)
 {
   const thisElement = createElementWithAttributes(parElement, parAttributeList);
   const thisTextNode = document.createTextNode(parTextNode);
   thisElement.appendChild(thisTextNode);
   return thisElement;
 }//function createElementWithAttributes(parElement, parAttributeLis...

 /****************************************************************************
 * Function: createQuizFormGroup(parQuizNumber)                              *
 * Function Description:                                                     *
 * This function creates a bootstrap form group consisting of label for the  *
 *  quiz number and textbox containing the score of a particular quiz.       *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parQuizNumber. This parameter is made up of the word 'quiz ' and a     *
 *    number. This will be used as id and quiz label. For example: if        *
 *    parQuizNumber has the value of quiz1, then id='quiz1' and              *
 *    quiz label = "Quiz 1".                                                 *
 *****************************************************************************/
 function createQuizFormGroup(parQuizNumber)
 {
   const thisQuizFormGroup = createElementWithAttributes("div", {class: 'form-group row mb-3'});
   const thisQuizLabel = createQuizLabel(parQuizNumber);
   const thisQuizTextBoxContainer = createElementWithAttributes("div", {class: 'col-8'});
   const thisQuizTextBox = createElementWithAttributes("input", {type:'text',class:'form-control',id:parQuizNumber});   
   
   thisQuizTextBoxContainer.appendChild(thisQuizTextBox);
   thisQuizFormGroup.appendChild(thisQuizLabel);
   thisQuizFormGroup.appendChild(thisQuizTextBoxContainer);
   return thisQuizFormGroup;
 }//function createQuizFormGroup(parQuizNumber)

/*****************************************************************************
 * Function: createQuizLabel(parQuizNumber)                                  *
 * Function Description:                                                     *
 * This function creates a bootstrap form label containing the quiz number   *
 *    example output:                                                        *
 *       <label for="quiz1" class="col-form-label col-4">Quiz 1</label>      *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parQuizNumber. This parameter is made up of the word 'quiz ' and a     *
 *    number. This will be used as id and quiz label. For example: if        *
 *    parQuizNumber has the value of quiz1, then id='quiz1' and              *
 *    quiz label = "Quiz 1".                                                 *
 *****************************************************************************/
 function createQuizLabel(parQuizNumber)
 {
   const thisQuizLabelText = getQuizLabelText(parQuizNumber);
   const thisQuizLabel = 
    createElementWithAttributesAndTextNode("label"
    , {for:parQuizNumber, class:"col-form-label col-4"}
    , thisQuizLabelText)
   return thisQuizLabel;
 }//function createQuizFormGroup(parQuizNumber)

/*****************************************************************************
 * Function: getCurrentYear()                                                *
 * Function Description:                                                     *
 *  This function gets the current year.                                     *
 *****************************************************************************/
function getCurrentYear()
{
  return new Date().getFullYear();
}//function getCurrentYear()

/*****************************************************************************
 * Function: getGrade(parValue)                                              *
 * Function Description:                                                     *
 *  This function gets the grade based on parValue                           *
 *****************************************************************************/
function getGrade(parValue)
{
  if(parValue >= 85)
  {
    grade = "High Distinction";
  }
  else if(parValue >= 75)
  {
    grade = "Distinction";
  }
  else if(parValue >= 65)
  {
    grade = "Credit";
  }
  else if(parValue >= 50)
  {
    grade = "Pass";
  }
  else
  {
    grade = "Fail";
  }

  return grade;
}//function getGrade(parValue)

/*****************************************************************************
 * Function: getQuizLabelText(parQuizNumber)                                 *
 * Function Description:                                                     *
 * This function separates the quiz number into the word 'Quiz ' and the     *
 * number. For example, if parQuizNumber = 'quiz 1', then the function will  *
 * return 'Quiz 1'.                                                          *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parQuizNumber. This parameter is made up of the word 'quiz ' and a     *
 *    number. This will be used as id and quiz label. For example: if        *
 *    parQuizNumber has the value of quiz1, then id='quiz1' and              *
 *    quiz label = "Quiz 1".                                                 *
 *****************************************************************************/
function getQuizLabelText(parQuizNumber)
{
  parQuizNumber = convertFirstLetterToUpper(parQuizNumber);
  return parQuizNumber.replace("z", "z ");
}//function getQuizLabelText(parQuizNumber)